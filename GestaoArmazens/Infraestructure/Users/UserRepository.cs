using DDDSample1.Domain.User;
using DDDSample1.Infrastructure.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Infrastructure.Users{

    public class UserRepository : BaseRepository<User, UserId> , IUserRepository
    {
       private readonly DDDSample1DbContext context;
        public UserRepository(DDDSample1DbContext context) : base(context.Users)
        {
            this.context = context;
        }

        public async Task<List<User>> GetAllExistingAsync() {
             return await this.context.Users.FromSqlRaw("SELECT a.* FROM [ddd].[User] a where a.PhoneNumber_PhoneNumber IS NOT NULL").ToListAsync();
        }

        public async Task<User> GetByPhoneNumberAsync(int? phoneNumber)
        {
            return await this.context.Users.FromSqlRaw("SELECT a.* FROM [ddd].[User] a where a.PhoneNumber_PhoneNumber = '" + phoneNumber + "'").FirstOrDefaultAsync();
        }

        public async Task<User> GetByUserNameAsync(string userName)
        {
            return await this.context.Users.FromSqlRaw("SELECT a.* FROM [ddd].[User] a where a.UserName_UserName = '" + userName + "'").FirstOrDefaultAsync();
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            return await this.context.Users.FromSqlRaw("SELECT a.* FROM [ddd].[User] a where a.Email_Email = '" + email + "'").FirstOrDefaultAsync();
        }

        public async Task<bool> CheckEmailPhoneExists (string email, int? phoneNumber) {
            return await this.context.Users.FromSqlRaw("SELECT a.* FROM [ddd].[User] a where a.Email_Email = '" + email + "' OR a.PhoneNumber_PhoneNumber = '" + phoneNumber + "'").AnyAsync();
        }
    }

}