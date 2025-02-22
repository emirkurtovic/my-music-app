using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Persistence;
using API.Interfaces.Services;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IUserClaimsService _userClaimsService;
        public ArtistsController (AppDbContext context, IUserClaimsService userClaimsService)
        {
            _context = context;
            _userClaimsService = userClaimsService;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> GetArtists()
        {
            try
            {
                var username = _userClaimsService.GetCurrentUsername();
                var items = await _context.Songs.Where(x => x.User.Name.Equals(username)).Select(x => x.Artist).Distinct().ToListAsync();
                return items;
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
