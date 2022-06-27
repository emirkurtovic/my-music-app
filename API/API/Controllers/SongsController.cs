using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.DTOs;
using API.Extensions;
using API.Helpers;
using API.Models;
using System.Linq;
using System.Security.Claims;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public SongsController(AppDbContext context)
        {
            _context = context;
        }
        
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetSongs([FromQuery] UserParams userParams)
        {
            try
            {
                //1st access - get totalCount
                var username = GetCurrentUsername();

                var query = _context.Songs.AsQueryable();
                query = query.Where(x => x.User.Name.Equals(username));

                //filteri
                if (userParams.searchString != null) query = query.Where(x => x.Name.ToLower().StartsWith(userParams.searchString.ToLower()));
                if (userParams.favorite != 0) query = query.Where(x => x.Favorite.Equals(userParams.favorite));
                if (userParams.artist != null) query = query.Where(x => x.Artist.Equals(userParams.artist));
                if (userParams.category != null) query = query.Where(x => x.SongCategory.Name.Equals(userParams.category));
                query = query.Where(x => x.Rating >= userParams.rating);

                var totalCount = await query.CountAsync();

                //2st access - get items + pagination header
                var totalPages = (int)Math.Ceiling(totalCount / (double)userParams.PageSize);
                var items = await query.OrderByDescending(x => x.DateEdited).ThenBy(x=>x.Id)
                    .Skip((userParams.CurrentPage - 1) * userParams.PageSize).Take(userParams.PageSize)
                    .Select(x => new { Song = x, CategoryName = x.SongCategory.Name }).ToListAsync();

                Response.AddPaginationHeader(userParams.CurrentPage, totalPages, userParams.PageSize, totalCount);

                return items;

            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSong(int id, SongDTO songDTO)
        {
            try
            {
                if (id != songDTO.Id) return BadRequest();
                var song = await _context.Songs.SingleOrDefaultAsync(x => x.Id == songDTO.Id);
                if (song == null) return BadRequest();
                var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == song.UserId);
                if (user == null) return BadRequest();
                var username = GetCurrentUsername();
                if (user.Name != username) return Unauthorized("You are not authorized to modify this song!");
                song.Name = songDTO.Name;
                song.Artist = songDTO.Artist;
                song.Url = songDTO.Url;
                song.Rating = songDTO.Rating;
                song.Favorite = songDTO.Favorite;
                song.SongCategoryId = songDTO.SongCategoryId;
                //song.DateEdited = DateTime.SpecifyKind(DateTime.UtcNow, DateTimeKind.Utc);
                song.DateEdited = DateTime.UtcNow;
                _context.Entry(song).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Song>> PostSong(SongDTO songDTO)
        {
            try
            {
                var username = GetCurrentUsername();
                var user = await _context.Users.SingleOrDefaultAsync(x => x.Name == username);
                if (user == null) return Unauthorized("You are not authorized to add this song!");
                //ne bi trebalo da se moze desiti jer je vec prosao authentikaciju - osim ako nije nekako u bazi pogresno upisano
                var song = new Song
                {
                    Name = songDTO.Name,
                    Artist = songDTO.Artist,
                    Url = songDTO.Url,
                    Rating = songDTO.Rating,
                    Favorite = songDTO.Favorite,
                    SongCategoryId=songDTO.SongCategoryId,
                    UserId = user.Id
                };
                _context.Songs.Add(song);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSong(int id)
        {
            try
            {
                var song = await _context.Songs.SingleOrDefaultAsync(x => x.Id == id);
                if (song == null) return NotFound();
                var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == song.UserId);
                if (user == null) return BadRequest();
                var username = GetCurrentUsername();
                if (user.Name != username) return Unauthorized("You are not authorized to delete this song!");
                _context.Songs.Remove(song);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        private string GetCurrentUsername()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var userClaims = identity.Claims;
                return userClaims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            }
            return null;
        }

    }
}
