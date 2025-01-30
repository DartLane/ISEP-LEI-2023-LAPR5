using DDDSample1.Domain.User;
using DDDSample1.Controllers;
using DDDSample1.Domain.Shared;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace GestaoArmazensTests.integration.ArmazemControllerServiceIntegrationTests
{

    public class UserControllerServiceIntegrationTests
    {

        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly Mock<IUserRepository> _repo;
        private readonly UserService _service;
        private readonly UsersController _controller;

        public UserControllerServiceIntegrationTests()
        {

            this._unitOfWork = new Mock<IUnitOfWork>();
            this._repo = new Mock<IUserRepository>();
            this._service = new UserService(this._unitOfWork.Object, this._repo.Object);
            this._controller = new UsersController(_service);
        }

        [Fact]
        public async Task AddAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new UserDTO(id, 123456789, "email@gmail.com", "firstName", "lastName", "password", "userName", "admin");

            _repo.Setup(p => p.CheckEmailPhoneExists(dto.email, dto.phoneNumber)).ReturnsAsync(false);
            
            var result = await this._controller.Create(dto);

            Assert.Equal(dto.phoneNumber, result.Value?.phoneNumber);
            Assert.Equal(dto.email, result.Value?.email);
            Assert.Equal(dto.firstName, result.Value?.firstName);
            Assert.Equal(dto.lastName, result.Value?.lastName);
            Assert.Equal(dto.password, result.Value?.password);
            Assert.Equal(dto.userName, result.Value?.userName);
            Assert.Equal(dto.userType, result.Value?.userType);
        }



    }
}