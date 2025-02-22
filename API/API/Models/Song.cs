using API.DTOs;
using API.Persistence.Models;

namespace API.Models
{
    public class Song
    {
        public Song(
            int id,
            string name,
            string artist,
            string url,
            int rating,
            bool favorite,
            DateTime dateAdded,
            DateTime dateEdited,
            SongCategory songCategory,
            int userId,
            User user)
        {
            Id = id;
            Name = name;
            Artist = artist;
            Url = url;
            Rating = rating;
            Favorite = favorite;
            DateAdded = dateAdded;
            DateEdited = dateEdited;
            SongCategory = songCategory;
            UserId = userId;
            User = user;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Url { get; set; }
        public int Rating { get; set; }
        public bool Favorite { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateEdited { get; set; }
        public SongCategory SongCategory { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }

    public static class SongHelper
    {
        public static SongOutputDTO ToOutputDTO(this Song song)
        {
            var result = new SongOutputDTO(song.Id, song.Name, song.Artist, song.Url, song.Rating, song.Favorite, song.SongCategory, song.DateAdded, song.DateEdited);
            return result;
        }

        public static Song ToSong(this DbSong song)
        {
            var result = new Song(
                song.Id,
                song.Name,
                song.Artist,
                song.Url,
                song.Rating,
                song.Favorite,
                song.DateAdded,
                song.DateEdited,
                (SongCategory)song.SongCategory,
                song.UserId,
                song.User.ToUser());
            return result;
        }

        public static (DbSong song, bool error) ToDbSong(this SongInputDTO songInputDTO, DbUser user)
        {
            if (!Enum.TryParse<SongCategory>(songInputDTO.SongCategory, out var _songCategory))
            {
                return (null, true);
            }
            var song = new DbSong()
            {
                Name = songInputDTO.Name,
                Artist = songInputDTO.Artist,
                Url = songInputDTO.Url,
                Rating = songInputDTO.Rating,
                Favorite = songInputDTO.Favorite,
                SongCategory = (DbSongCategory)_songCategory,
                UserId = user.Id,
                DateAdded = DateTime.UtcNow,
                DateEdited = DateTime.UtcNow
            };
            return (song, false);
        }
    }
}
