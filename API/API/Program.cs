using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using API.Persistence;
using System.Text;
using API.Interfaces.Services;
using API.Utils.Services;
using API.Interfaces.Repositories;
using API.Persistence.Repositories;

var _allowLocalSPADevServerCorsPolicy = "allowLocalSPADevServerCorsPolicy";
var _localSPADevServer = "http://localhost:4200";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Environment.IsDevelopment() ?
        builder.Configuration.GetConnectionString("DefaultConnection") : Environment.GetEnvironmentVariable("DATABASE_STR");
    options.UseNpgsql(connectionString);
});
builder.Services.AddCors(options =>
{
    options.AddPolicy
    (
        name: _allowLocalSPADevServerCorsPolicy,
        builder => builder.WithOrigins(_localSPADevServer).AllowAnyHeader().AllowAnyMethod()
    );
});

// Register services required for authentication and authorization
builder.Services.AddScoped<TokenService>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).
    AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IUserClaimsService, UserClaimsService>();

builder.Services.AddScoped<ISongRepository, SongRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseCors(_allowLocalSPADevServerCorsPolicy);
}

app.UseAuthentication(); // necessary for identifying the user and providing ClaimsPortal used by authorization
app.UseAuthorization(); // necessary for authorization ([Authorize] without parameters, authorizes identified users)

// serve Angular files
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

app.MapFallbackToController("Index", "Fallback");

app.Run();
