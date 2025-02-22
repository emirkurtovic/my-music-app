using Microsoft.AspNetCore.Mvc;
using API.Persistence;
using API.DTOs;
using System.Security.Cryptography;
using System.Text;
using API.Utils.Services;
using API.Interfaces.Services;
using API.Persistence.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TokenService _tokenService;
        private readonly IUnitOfWork _unitOfWork;

        public AccountController(AppDbContext context, TokenService tokenService, IUnitOfWork unitOfWork)
        {
            _context = context;
            _tokenService = tokenService;
            _unitOfWork = unitOfWork;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserOutputDTO>> Register(LoginRegisterDTO registerDTO)
        {
            try
            {
                if (await _unitOfWork.UserRepository.UserExists(registerDTO.Username))
                {
                    return BadRequest();
                }

                using var hmac = new HMACSHA512();
                var user = new DbUser
                {
                    Name = registerDTO.Username,
                    PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                    PasswordSalt = hmac.Key,
                    Role = "Member",
                    About = ""
                };
                _context.Add(user);

                var token = _tokenService.CreateToken(user);
                var userDTO = new UserOutputDTO() { Id = user.Id, Username = user.Name, Token = token };
                await _context.SaveChangesAsync();

                return userDTO;
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserOutputDTO>> Login(LoginRegisterDTO loginDTO)
        {
            try
            {
                var user = await _unitOfWork.UserRepository.GetUser(loginDTO);
                if (user == null)
                {
                    return Unauthorized("Invalid username");
                }

                using var hmac = new HMACSHA512(user.PasswordSalt);
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));

                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != user.PasswordHash[i])
                    {
                        return Unauthorized("Invalid password");
                    }
                }

                var token = _tokenService.CreateToken(user);
                var userDTO = new UserOutputDTO() { Id = user.Id, Username = user.Name, Token = token };
                return userDTO;
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
