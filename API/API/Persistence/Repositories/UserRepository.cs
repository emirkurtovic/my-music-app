using API.DTOs;
using API.Interfaces.Repositories;
using API.Persistence.Models;
using API.Utils.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context, TokenService tokenService)
        {
            _context = context;
        }

        public async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.Name == username);
        }

        public async Task<DbUser> GetUser(LoginRegisterDTO loginDTO)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Name == loginDTO.Username);
            return user;
        }
    }
}
