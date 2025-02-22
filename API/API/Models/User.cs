using API.Persistence.Models;

namespace API.Models
{
    public class User
    {
        public User(int id, string name, byte[] passwordHash, byte[] passwordSalt, string role, string about)
        {
            Id = id;
            Name = name;
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
            Role = role;
            About = about;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Role { get; set; } 
        public string About { get; set; }
    }

    public static class UserHelper
    {
        public static User ToUser(this DbUser user)
        {
            var result = new User(user.Id, user.Name, user.PasswordHash, user.PasswordSalt, user.Role, user.About);
            return result;
        }
    }
}
