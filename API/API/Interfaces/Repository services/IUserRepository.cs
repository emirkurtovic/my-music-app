using API.DTOs;
using API.Persistence.Models;

namespace API.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<bool> UserExists(string username);
        Task<DbUser> GetUser(LoginRegisterDTO loginDTO);
    }
}
