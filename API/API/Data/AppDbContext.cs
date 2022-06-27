using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Song> Songs { get; set; }
        public DbSet<SongCategory> SongCategories { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
