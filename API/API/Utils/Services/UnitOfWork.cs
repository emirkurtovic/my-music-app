using API.Interfaces.Repositories;
using API.Interfaces.Services;

namespace API.Utils.Services
{
    public class UnitOfWork: IUnitOfWork
    {
        public UnitOfWork(ISongRepository songRepository, IUserRepository userRepository)
        {
            SongRepository = songRepository;
            UserRepository = userRepository;
        }

        public ISongRepository SongRepository { get; }
        public IUserRepository UserRepository { get; }
    }
}
