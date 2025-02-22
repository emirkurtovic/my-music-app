using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Persistence.Models
{
    public class DbSong
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Url { get; set; }
        public int Rating { get; set; }
        public bool Favorite { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateEdited { get; set; }
        public DbSongCategory SongCategory { get; set; }

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public DbUser User { get; init; }
    }
}
