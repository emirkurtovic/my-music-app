using API.Controllers;
using API.DTOs;
using API.Interfaces.Repositories;
using API.Models;
using API.Persistence.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence.Repositories
{
    public class SongRepository : ISongRepository
    {
        private readonly AppDbContext _context;
        public SongRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(IQueryable<DbSong> songs, int totalPageCount, int totalSongsCount, bool error)> GetFilteredSongs(SongsFilterDTO songsFilterDTO, string username)
        {
            // 1. Check category
            SongCategory songCategory = SongCategory.Reggae;
            if (songsFilterDTO.SongCategory != null && !Enum.TryParse(songsFilterDTO.SongCategory, out songCategory))
            {
                return (null, 0, 0, true);
            }
            var _songCategory = (DbSongCategory)songCategory;

            // 2. Get total count
            var query = _context.Songs.AsQueryable();
            query = query.Where(x => x.User.Name.Equals(username));

            if (songsFilterDTO.SearchString != null)
            {
                query = query.Where(x => x.Name.ToLower().StartsWith(songsFilterDTO.SearchString.ToLower()));
            }
            if (songsFilterDTO.Favorite)
            {
                query = query.Where(x => x.Favorite);
            }
            if (songsFilterDTO.Artist != null)
            {
                query = query.Where(x => x.Artist.Equals(songsFilterDTO.Artist));
            }
            if (songsFilterDTO.SongCategory != null)
            {
                query = query.Where(x => x.SongCategory == _songCategory);
            }
            query = query.Where(x => x.Rating >= songsFilterDTO.Rating);

            var totalSongsCount = await query.CountAsync();

            // 3. Get items
            var totalPagesCount = (int)Math.Ceiling(totalSongsCount / (double)songsFilterDTO.PageSize);

            var songs = query.OrderByDescending(x => x.DateEdited).ThenBy(x => x.Id)
                .Skip((songsFilterDTO.CurrentPage - 1) * songsFilterDTO.PageSize).Take(songsFilterDTO.PageSize);

            return (songs, totalPagesCount, totalSongsCount, false); 
        }

        public async Task<UpdateSongResultType> UpdateSong(int id, SongInputDTO songInputDTO, string username)
        {
            var song = await _context.Songs.SingleOrDefaultAsync(x => x.Id == id);
            if (song == null)
            {
                return UpdateSongResultType.BadRequest;
            }
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == song.UserId);
            if (user == null)
            {
                return UpdateSongResultType.BadRequest;
            }

            if (user.Name != username)
            {
                return UpdateSongResultType.Unauthorized;
            }

            song.Name = songInputDTO.Name;
            song.Artist = songInputDTO.Artist;
            song.Url = songInputDTO.Url;
            song.Rating = songInputDTO.Rating;
            song.Favorite = songInputDTO.Favorite;

            if (!Enum.TryParse<SongCategory>(songInputDTO.SongCategory, out var _songCategory))
            {
                return UpdateSongResultType.BadRequest;
            }
            song.SongCategory = (DbSongCategory)_songCategory;
            song.DateEdited = DateTime.UtcNow;

            _context.Entry(song).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return UpdateSongResultType.Success;
        }

        public async Task<bool> AddSong(SongInputDTO songInputDTO, string username)
        {
            var user = await _context.Users.SingleAsync(x => x.Name == username);

            var song = songInputDTO.ToDbSong(user);
            if (song.error)
            {
                return false;
            }
            
            _context.Songs.Add(song.song);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<DeleteSongResultType> DeleteSong(int id, string username)
        {
            var song = await _context.Songs.SingleOrDefaultAsync(x => x.Id == id);
            if (song == null)
            {
                return DeleteSongResultType.NotFound;
            }
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == song.UserId);
            if (user == null)
            {
                return DeleteSongResultType.BadRequest;
            }

            if (user.Name != username)
            {
                return DeleteSongResultType.Unauthorized;
            }

            _context.Songs.Remove(song);
            await _context.SaveChangesAsync();

            return DeleteSongResultType.Success;
        }
    }
}
