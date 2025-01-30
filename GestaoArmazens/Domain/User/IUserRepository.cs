using DDDSample1.Domain.Shared;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Domain.User
{
    public interface IUserRepository:IRepository<User,UserId>
    {
        Task<List<User>> GetAllExistingAsync();
        Task<User> GetByPhoneNumberAsync(int? phoneNumber);
        Task<User> GetByUserNameAsync(string userName);
        Task<User> GetByEmailAsync(string email);
        Task<bool> CheckEmailPhoneExists (string email, int? phoneNumber);
    }
}