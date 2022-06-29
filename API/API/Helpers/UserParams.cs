

using System.ComponentModel.DataAnnotations;

namespace API.Helpers
{
    public class UserParams
    {
        //filteri
        [StringLength(200)]
        public string searchString { get; set; }
        
        [Range(0, 1)]
        public int favorite { get; set; }

        [StringLength(200)]
        public string artist { get; set; }

        [StringLength(50)]
        public string category { get; set; }

        [Range(1, 5)]
        public int rating { get; set; }

        [Range(1,int.MaxValue)]
        public int CurrentPage { get; set; } = 1;
        public int PageSize { get => 10; }
        
    }
}
