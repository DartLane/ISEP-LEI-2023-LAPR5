using System;
using DDDSample1.Domain.User;

namespace DDDSample1.Domain.User
{
    public class UserMapper
    {
        public static UserDTO ToDto(User obj)
        {
            return new UserDTO(obj.Id.AsGuid(), obj.phoneNumber?.phoneNumber,obj.email?.email, obj.firstName, obj.lastName, obj.password?.password, obj.userName?.userName, obj.userType.userType);
        }

        public static User ToDomain(UserDTO dto)
        {
            var User = new User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);
            return User;
        }

    }
}