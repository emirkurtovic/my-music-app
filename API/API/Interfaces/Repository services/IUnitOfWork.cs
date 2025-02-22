using API.Interfaces.Repositories;

namespace API.Interfaces.Services
{
    public interface IUnitOfWork
    {
        ISongRepository SongRepository { get; }
        IUserRepository UserRepository { get; }
    }
}
