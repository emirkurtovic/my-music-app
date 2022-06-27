using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Song
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(200)] //200 iako postoje duzi
        public string Name { get; set; }
        
        [Required]
        [StringLength(200)] //200 iako postoje duzi
        public string Artist { get; set; }
        
        [StringLength(200)]
        public string Url { get; set; }
        
        [Range(1, 5)]
        public int Rating { get; set; }
        
        [Range(0, 1)]
        public int Favorite { get; set; }

        //public DateTime DateAdded { get; set; } = DateTime.SpecifyKind(DateTime.UtcNow, DateTimeKind.Utc);
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
        //public DateTime DateEdited { get; set; } = DateTime.SpecifyKind(DateTime.UtcNow, DateTimeKind.Utc);
        public DateTime DateEdited { get; set; } = DateTime.UtcNow;

        //veza sa SongCategory
        public int SongCategoryId { get; set; }
        public SongCategory? SongCategory { get; set; }
        //veza sa User
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
