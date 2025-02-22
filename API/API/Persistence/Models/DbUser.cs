using System.ComponentModel.DataAnnotations;

namespace API.Persistence.Models
{
    public class DbUser
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Role { get; set; } // TODO: use this
        public string About { get; set; }
    }
}
