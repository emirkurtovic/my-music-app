using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongCategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SongCategoriesController(AppDbContext context)
        {
            _context = context;
        }
        [Authorize]    
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongCategory>>> GetCategories()
        {
            try
            {
                return await _context.SongCategories.ToListAsync();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
