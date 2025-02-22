using API.Controllers;
using API.DTOs;
using API.Persistence.Models;

namespace API.Interfaces.Repositories
{
    public interface ISongRepository
    {
        Task<(IQueryable<DbSong> songs, int totalPageCount, int totalSongsCount, bool error)> GetFilteredSongs(SongsFilterDTO songsFilterDTO, string username);
        Task<UpdateSongResultType> UpdateSong(int id, SongInputDTO songInputDTO, string username);
        Task<bool> AddSong(SongInputDTO songInputDTO, string username);
        Task<DeleteSongResultType> DeleteSong(int id, string username);
    }

    public enum UpdateSongResultType
    {
        BadRequest,
        Unauthorized,
        Success
    }

    public enum DeleteSongResultType
    {
        NotFound,
        BadRequest,
        Unauthorized,
        Success
    }
}
