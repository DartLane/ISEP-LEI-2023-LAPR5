using DDDSample1.Domain.User;
using DDDSample1.Domain.Shared;
using Moq;


namespace GestaoArmazensTests.unit.UserUnitTests
{


    public class UserServiceUnitTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly Mock<IUserRepository> _repo;
        private readonly UserService _service;

        public UserServiceUnitTests()
        {
            this._unitOfWork = new Mock<IUnitOfWork>();
            this._repo = new Mock<IUserRepository>();
            this._service = new UserService(this._unitOfWork.Object, this._repo.Object);
        }

        [Fact]
        public async Task AddAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");

            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(false);

            var result = await this._service.AddAsync(dto);

            Assert.Equal(dto.phoneNumber, result.phoneNumber);
            Assert.Equal(dto.email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(dto.userName, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task AddAsyncFail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");

            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(true);

            await Assert.ThrowsAsync<BusinessRuleValidationException>(() => this._service.AddAsync(dto));
        }

        [Fact]
        public async Task GetByPhoneNumberAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = UserMapper.ToDomain(dto);
            int phoneNumber = 123456789;

            _repo.Setup(p => p.GetByPhoneNumberAsync(phoneNumber)).ReturnsAsync(user);

            var result = await this._service.GetByPhoneNumberAsync(phoneNumber);

            Assert.Equal(phoneNumber, result.phoneNumber);
            Assert.Equal(dto.email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(dto.userName, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task GetByPhoneNumberAsyncFail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");
            var user = UserMapper.ToDomain(dto);
            int phoneNumber = 123456789;

            _repo.Setup(p => p.GetByPhoneNumberAsync(phoneNumber)).ReturnsAsync(() => null);

            var result = await this._service.GetByPhoneNumberAsync(phoneNumber);

            Assert.Null(result);
        }

        [Fact]
        public async Task GetUserByUserName()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            string username = "username";

            _repo.Setup(p => p.GetByUserNameAsync(username)).ReturnsAsync(user);

            var result = await this._service.GetUserByUserName(username);

            Assert.Equal(dto.phoneNumber, result.phoneNumber);
            Assert.Equal(dto.email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(username, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task GetUserByUserNameFail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            string username = "username";

            _repo.Setup(p => p.GetByUserNameAsync(username)).ReturnsAsync(() => null);

            var result = await this._service.GetUserByUserName(username);

            Assert.Null(result);
        }

        [Fact]
        public async Task GetUserByEmail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            string email = "email@gmail.com";

            _repo.Setup(p => p.GetByEmailAsync(email)).ReturnsAsync(user);

            var result = await this._service.GetUserByEmail(email);

            Assert.Equal(dto.phoneNumber, result.phoneNumber);
            Assert.Equal(email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(dto.userName, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task GetUserByEmailFail()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            string email = "email@gmail.com";

            _repo.Setup(p => p.GetByEmailAsync(email)).ReturnsAsync(() => null);

            var result = await this._service.GetUserByEmail(email);

            Assert.Null(result);
        }

        [Fact]
        public async Task GetAllAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            List<UserDTO> luserdto = new List<UserDTO> { dto };
            List<User> luser = new List<User> { user };

            _repo.Setup(p => p.GetAllAsync()).ReturnsAsync(luser);

            var result = await this._service.GetAllAsync();

            Assert.Equal(dto.phoneNumber, result.ElementAt(0).phoneNumber);
            Assert.Equal(dto.email, result.ElementAt(0).email);
            Assert.Equal(dto.firstName, result.ElementAt(0).firstName);
            Assert.Equal(dto.lastName, result.ElementAt(0).lastName);
            Assert.Equal(dto.password, result.ElementAt(0).password);
            Assert.Equal(dto.userName, result.ElementAt(0).userName);
            Assert.Equal(dto.userType, result.ElementAt(0).userType);
        }

        [Fact]
        public async Task GetAllExistingAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);
            List<UserDTO> luserdto = new List<UserDTO> { dto };
            List<User> luser = new List<User> { user };

            _repo.Setup(p => p.GetAllExistingAsync()).ReturnsAsync(luser);

            var result = await this._service.GetAllExistingAsync();

            Assert.Equal(dto.phoneNumber, result.ElementAt(0).phoneNumber);
            Assert.Equal(dto.email, result.ElementAt(0).email);
            Assert.Equal(dto.firstName, result.ElementAt(0).firstName);
            Assert.Equal(dto.lastName, result.ElementAt(0).lastName);
            Assert.Equal(dto.password, result.ElementAt(0).password);
            Assert.Equal(dto.userName, result.ElementAt(0).userName);
            Assert.Equal(dto.userType, result.ElementAt(0).userType);
        }

        [Fact]
        public async Task GetByIdAsync()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(user);

            var result = await this._service.GetByIdAsync(uid);

            Assert.Equal(dto.phoneNumber, result.phoneNumber);
            Assert.Equal(dto.email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(dto.userName, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task GetByIdAsyncFail()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(() => null);

            var result = await this._service.GetByIdAsync(uid);

            Assert.Null(result);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(user);
            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(false);


            var result = await this._service.UpdateAsync(dto);

            Assert.Equal(dto.phoneNumber, result.phoneNumber);
            Assert.Equal(dto.email, result.email);
            Assert.Equal(dto.firstName, result.firstName);
            Assert.Equal(dto.lastName, result.lastName);
            Assert.Equal(dto.password, result.password);
            Assert.Equal(dto.userName, result.userName);
            Assert.Equal(dto.userType, result.userType);
        }

        [Fact]
        public async Task UpdateAsyncFail1()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(() => null);
            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(false);

            var result = await this._service.UpdateAsync(dto);

            Assert.Null(result);
        }

        [Fact]
        public async Task UpdateAsyncFail2()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(user);
            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(true);


            await Assert.ThrowsAsync<BusinessRuleValidationException>(() => this._service.UpdateAsync(dto));
        }

        [Fact]
        public async Task AnonimizarAsync()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(user);

            var result = await this._service.AnonimizarAsync(uid);

            Assert.Null(result.phoneNumber);
            Assert.Null(result.email);
            Assert.Null(result.firstName);
            Assert.Null(result.lastName);
            Assert.Null(result.password);
            Assert.Null(result.userName);
            Assert.NotNull(result.userType);
            Assert.NotNull(result.Id);
        }
        
        [Fact]
        public async Task AnonimizarAsyncFail()
        {
            Guid id = Guid.NewGuid();
            UserId uid = new UserId(id);
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "username", "admin");
            var user = UserMapper.ToDomain(dto);

            _repo.Setup(p => p.GetByIdAsync(uid)).ReturnsAsync(() => null);

            var result = await this._service.AnonimizarAsync(uid);

            Assert.Null(result);
        }

    }
}