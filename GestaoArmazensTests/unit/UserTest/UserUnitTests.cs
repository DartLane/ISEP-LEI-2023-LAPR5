using DDDSample1.Domain.User;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.UserUnitTests
{
    public class UserUnitTests
    {
        [Fact]
        public void CreateUser()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void CreateUserInvalidPhone()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 1234567890, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void CreateUserInvalidPhone2()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 12345678, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void CreateUserInvalidEmail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "", "firstName", "lastName", "password", "userName", "admin");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void CreateUserInvalidPassword()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "passwordddddddddddddddddddddddddddddddddddddd", "userName", "admin");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void CreateUserInvalidUsername()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userNameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "admin");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void CreateUserInvalidUserType()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "unknown");
            Assert.Throws<ArgumentNullException>(() => new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType));
        }

        [Fact]
        public void ChangePhoneNumber()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            int newPhone = 987654321;
            user.AlterarPhoneNumber(newPhone);

            Assert.Equal(newPhone, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangeEmail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newEmail = "newEmail@gmail.com";
            user.AlterarEmail(newEmail);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(newEmail, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangeFirstName()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newFirstName = "newName";
            user.AlterarFirstName(newFirstName);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(newFirstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangeLastName()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newLastName = "newSurname";
            user.AlterarLastName(newLastName);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(newLastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangePassword()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newPassword = "newPassword";
            user.AlterarPassword(newPassword);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(newPassword, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangeUsername()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newUsername = "newUsername";
            user.AlterarUserName(newUsername);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(newUsername, user.userName.userName);
            Assert.Equal(dto.userType, user.userType.userType);
        }

        [Fact]
        public void ChangeUserType()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = new DDDSample1.Domain.User.User(dto.phoneNumber, dto.email, dto.firstName, dto.lastName, dto.password, dto.userName, dto.userType);

            string newUserType = "gestor Frota";
            user.AlterarUserType(newUserType);

            Assert.Equal(dto.phoneNumber, user.phoneNumber.phoneNumber);
            Assert.Equal(dto.email, user.email.email);
            Assert.Equal(dto.firstName, user.firstName);
            Assert.Equal(dto.lastName, user.lastName);
            Assert.Equal(dto.password, user.password.password);
            Assert.Equal(dto.userName, user.userName.userName);
            Assert.Equal(newUserType, user.userType.userType);
        }


    }
}