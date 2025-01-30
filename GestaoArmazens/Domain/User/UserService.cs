using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Armazens;
using System;

namespace DDDSample1.Domain.User
{
    public class UserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _repo;


        public UserService(IUnitOfWork unitOfWork, IUserRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<UserDTO> AddAsync(UserDTO dto)
        {
            var user = UserMapper.ToDomain(dto);
            Console.WriteLine(user.ToString());

            bool exists = await this._repo.CheckEmailPhoneExists(dto.email, dto.phoneNumber);

            if(exists) throw new BusinessRuleValidationException("email or phone number already exists");

            await this._repo.AddAsync(user);

            await this._unitOfWork.CommitAsync();

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> GetByPhoneNumberAsync(int phoneNumber)
        {
            var user = await this._repo.GetByPhoneNumberAsync(phoneNumber);
            
            if(user == null)
                return null;

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> GetUserByUserName(string userName)
        {
            var user = await this._repo.GetByUserNameAsync(userName);
            
            if(user == null)
                return null;

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> GetUserByEmail(string email)
        {
            var user = await this._repo.GetByEmailAsync(email);
            
            if(user == null)
                return null;

            return UserMapper.ToDto(user);
        }

        public async Task<List<UserDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();
            
            List<UserDTO> listDto = list.ConvertAll<UserDTO>(User => 
                UserMapper.ToDto(User));

            return listDto;
        }

        public async Task<List<UserDTO>> GetAllExistingAsync()
        {
            var list = await this._repo.GetAllExistingAsync();
            
            List<UserDTO> listDto = list.ConvertAll<UserDTO>(User => 
                UserMapper.ToDto(User));

            return listDto;
        }

        public async Task<UserDTO> GetByIdAsync(UserId id)
        {
            var user = await this._repo.GetByIdAsync(id);
            
            if(user == null)
                return null;

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> UpdateAsync(UserDTO dto) {

            var user = await this._repo.GetByIdAsync(new UserId(dto.Id));

            if (user == null) return null;

            bool exists = await this._repo.CheckEmailPhoneExists(dto.email, dto.phoneNumber);

            if(exists) throw new BusinessRuleValidationException("email or phone number already exists");

            user.AlterarPhoneNumber(dto.phoneNumber);
            user.AlterarEmail(dto.email);
            user.AlterarFirstName(dto.firstName);
            user.AlterarLastName(dto.lastName);
            user.AlterarPassword(dto.password);
            user.AlterarUserName(dto.userName);
            user.AlterarUserType(dto.userType);

            await this._unitOfWork.CommitAsync();

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> AnonimizarAsync(UserId id) {

            var user = await this._repo.GetByIdAsync(id);

            if (user == null) return null;

            user.AlterarPhoneNumber(null);
            user.AlterarEmail(null);
            user.AlterarFirstName(null);
            user.AlterarLastName(null);
            user.AlterarPassword(null);
            user.AlterarUserName(null);

            await this._unitOfWork.CommitAsync();

            return UserMapper.ToDto(user);
        }

        public async Task<UserDTO> DeleteAsync(UserId id)
        {
            var user = await this._repo.GetByIdAsync(id); 

            if (user == null)
                return null;   

            this._repo.Remove(user);
            await this._unitOfWork.CommitAsync();

            return UserMapper.ToDto(user);
        }

    }
    
}