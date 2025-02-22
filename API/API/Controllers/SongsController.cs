using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using System.ComponentModel.DataAnnotations;
using API.Interfaces.Services;
using API.Utils.Extensions;
using API.Models;
using API.Interfaces.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        private readonly IUserClaimsService _userClaimsService;
        private readonly IUnitOfWork _unitOfWork;

        public SongsController(IUserClaimsService userClaimsService, IUnitOfWork unitOfWork)
        {
            _userClaimsService = userClaimsService;
            _unitOfWork = unitOfWork;
        }
        
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongOutputDTO>>> GetSongs([FromQuery] SongsFilterDTO songsFilterDTO)
        {
            try
            {
                var username = _userClaimsService.GetCurrentUsername();
                var getFilteredSongsResult = await _unitOfWork.SongRepository.GetFilteredSongs(songsFilterDTO, username);
                if (getFilteredSongsResult.error)
                {
                    return BadRequest();
                }

                var songs = await getFilteredSongsResult.songs.Include(s => s.User).Select(s => s.ToSong().ToOutputDTO()).ToListAsync();

                Response.AddPaginationHeader(songsFilterDTO.CurrentPage, getFilteredSongsResult.totalPageCount, songsFilterDTO.PageSize, getFilteredSongsResult.totalSongsCount);

                return songs;
            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSong(int id, SongInputDTO songDTO)
        {
            try
            {
                var username = _userClaimsService.GetCurrentUsername();

                var updateSongResult = await _unitOfWork.SongRepository.UpdateSong(id, songDTO, username);
                if (updateSongResult == UpdateSongResultType.BadRequest)
                {
                    return BadRequest();
                }
                else if (updateSongResult == UpdateSongResultType.Unauthorized)
                {
                    return Unauthorized("You are not authorized to modify this song!");
                }

                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostSong(SongInputDTO songDTO)
        {
            try
            {
                var username = _userClaimsService.GetCurrentUsername();
                var success = await _unitOfWork.SongRepository.AddSong(songDTO, username);
                if (!success)
                {
                    return BadRequest();
                }

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
                var username = _userClaimsService.GetCurrentUsername();
                var deleteSongResult = await _unitOfWork.SongRepository.DeleteSong(id, username);

                if (deleteSongResult == DeleteSongResultType.NotFound)
                {
                    return NotFound();
                }
                else if (deleteSongResult == DeleteSongResultType.BadRequest)
                {
                    return BadRequest();
                }
                else if (deleteSongResult == DeleteSongResultType.Unauthorized)
                {
                    return Unauthorized("You are not authorized to delete this song!");
                }

                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }

    public class SongsFilterDTO
    {
        [StringLength(200)]
        public string SearchString { get; set; }
        
        public bool Favorite { get; set; }
        
        [StringLength(200)]
        public string Artist { get; set; }
        
        public string SongCategory { get; set; }
        
        [Range(1, 5)]
        public int Rating { get; set; }
       
        [Range(1, int.MaxValue)]
        public int CurrentPage { get; set; } = 1;
        
        [Range(1, int.MaxValue)]
        public int PageSize { get => 10; }
    }
}
