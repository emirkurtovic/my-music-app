﻿using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class SongCategory
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
    }
}