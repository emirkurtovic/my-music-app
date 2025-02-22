using API.Persistence.Models;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class SongInputDTO
    {
        [Required]
        [StringLength(200)]
        public string Name { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Artist { get; set; }
        
        [StringLength(200)]
        public string Url { get; set; }
        
        [Range(1, 5)]
        public int Rating { get; set; }
        
        public bool Favorite { get; set; }
        
        [Required]
        public string SongCategory { get; set; }
    }

    public class SongOutputDTO
    {
        public SongOutputDTO(int id, string name, string artist, string url, int rating, bool favorite, SongCategory songCategory, DateTime dateAdded, DateTime dateEdited)
        {
            Id = id;
            Name = name;
            Artist = artist;
            Url = url;
            Rating = rating;
            Favorite = favorite;
            SongCategory = songCategory.ToString();
            DateAdded = dateAdded;
            DateEdited = dateEdited;
        }

        public int Id { get; }
        public string Name { get; }
        public string Artist { get; }
        public string Url { get; }
        public int Rating { get; }
        public bool Favorite { get; }
        public string SongCategory { get; }
        public DateTime DateAdded { get; }
        public DateTime DateEdited { get; }
    }
}
