using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class SongDTO
    {
     
        [Key]
        public int Id { get; set; }
        
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
        
        [Range(0, 1)]
        public int Favorite { get; set; }
        
        [Required]
        public int SongCategoryId { get; set; }
        
    }
}
