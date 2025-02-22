using Microsoft.EntityFrameworkCore;
using API.Persistence.Models;

namespace API.Persistence
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<DbSong> Songs { get; set; }
        public DbSet<DbUser> Users { get; set; }
    }
}
