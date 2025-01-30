using DDDSample1.Domain.Armazens;
using DDDSample1.Controllers;
using DDDSample1.Domain.Shared;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace GestaoArmazensTests.integration.ArmazemControllerServiceIntegrationTests
{
    public class ArmazemControllerServiceIntegrationTests
    {
        private ArmazemService _service;
        private ArmazensController _controller;
        private Mock<IArmazemRepository> repository = new Mock<IArmazemRepository>();
        private Mock<IUnitOfWork> unityOfWork = new Mock<IUnitOfWork>();
        public ArmazemControllerServiceIntegrationTests()
        {

            _service = new ArmazemService(unityOfWork.Object, repository.Object);
            _controller = new ArmazensController(_service);

        }

        [Fact]
        public void TestCreateArmazem()
        {
            CreatingArmazemDTO dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f, true);
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.AddAsync(armazem)).Returns(Task.FromResult(armazem));
            var result = _controller.Create(dto);
            Assert.NotNull(result);
            //Check if result have the same values as the dto
            Assert.Equal(dto.Id, result.Result.Value.Id);
            Assert.Equal(dto.Designacao, result.Result.Value.Designacao);
            Assert.Equal(dto.Localidade, result.Result.Value.Localidade);
            Assert.Equal(dto.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(dto.Morada, result.Result.Value.Morada);
            Assert.Equal(dto.Latitude, result.Result.Value.Latitude);
            Assert.Equal(dto.Longitude, result.Result.Value.Longitude);


        }

        //TestCreateArmazem2
        [Fact]
        public void TestCreateArmazem2()
        {
            CreatingArmazemDTO dto = new CreatingArmazemDTO("aaa", "aaaa", "aaaa", "aaaa", "3000-000", 10.15f, 8.62f, 200f, true);
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.AddAsync(armazem)).Returns(Task.FromResult(armazem));
            var result = _controller.Create(dto);
            Assert.NotNull(result);
            //Check if result have the same values as the dto
            Assert.Equal(dto.Id, result.Result.Value.Id);
            Assert.Equal(dto.Designacao, result.Result.Value.Designacao);
            Assert.Equal(dto.Localidade, result.Result.Value.Localidade);
            Assert.Equal(dto.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(dto.Morada, result.Result.Value.Morada);
            Assert.Equal(dto.Latitude, result.Result.Value.Latitude);
            Assert.Equal(dto.Longitude, result.Result.Value.Longitude);
        }

        [Fact]
        public void TestGetArmazem()
        {
            Armazem armazem = new Armazem("aaa", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.GetByIdAsync(armazem.Id)).Returns(Task.FromResult(armazem));
            var result = _controller.GetGetById(armazem.Id.Value);
            Assert.NotNull(result);
            //Check if result have the same values as the armazem
            Assert.Equal(armazem.Designacao.Designacao, result.Result.Value.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, result.Result.Value.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, result.Result.Value.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, result.Result.Value.Longitude);

        }

        //TestGetArmazem2
        [Fact]
        public void TestGetArmazem2()
        {
            Armazem armazem = new Armazem("aaa", "23423423", "SDFSDSSFD", "SDDFSFS", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.GetByIdAsync(armazem.Id)).Returns(Task.FromResult(armazem));
            var result = _controller.GetGetById(armazem.Id.Value);
            Assert.NotNull(result);
            //Check if result have the same values as the armazem
            Assert.Equal(armazem.Designacao.Designacao, result.Result.Value.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, result.Result.Value.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, result.Result.Value.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, result.Result.Value.Longitude);
        }

        [Fact]
        public void TestGetAllArmazens()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            Armazem armazem2 = new Armazem(("222"), "Armazem2", "Rua2", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            List<Armazem> armazens = new List<Armazem>();
            armazens.Add(armazem);
            armazens.Add(armazem2);
            repository.Setup(x => x.GetAllAsync()).Returns(Task.FromResult(armazens));
            var result = _controller.GetAll();
            Assert.NotNull(result);
            //Check if result have the same values as the armazem
            var res1 = result.Result.Value.ToList()[0];
            Assert.Equal(armazem.Designacao.Designacao, res1.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, res1.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, res1.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, res1.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, res1.Longitude);

            var res2 = result.Result.Value.ToList()[1];
            Assert.Equal(armazem2.Designacao.Designacao, res2.Designacao);
            Assert.Equal(armazem2.Endereco.CodigoPostal, res2.CodigoPostal);
            Assert.Equal(armazem2.Endereco.Morada, res2.Morada);
            Assert.Equal(armazem2.Coordenadas.Latitude, res2.Latitude);
            Assert.Equal(armazem2.Coordenadas.Longitude, res2.Longitude);

        }

        [Fact]
        public void TestGetArmazemByLocalidade()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            Armazem armazem2 = new Armazem(("222"), "Armazem2", "Rua2", "Porto2", "4020-000", 42.15f, -9.62f, 200f);
            List<Armazem> armazens = new List<Armazem>();
            armazens.Add(armazem);
            armazens.Add(armazem2);
            repository.Setup(x => x.getByLocalidade("Porto")).Returns(Task.FromResult(armazens));
            var result = _controller.GestGetByLocalidade("Porto");
            Assert.NotNull(result);
            //Check if result have the same values as the armazem
            var res1 = result.Result.Value.ToList()[0];
            Assert.Equal(armazem.Designacao.Designacao, res1.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, res1.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, res1.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, res1.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, res1.Longitude);

            var res2 = result.Result.Value.ToList()[1];
            Assert.Equal(armazem2.Designacao.Designacao, res2.Designacao);
            Assert.Equal(armazem2.Endereco.CodigoPostal, res2.CodigoPostal);
            Assert.Equal(armazem2.Endereco.Morada, res2.Morada);
            Assert.Equal(armazem2.Coordenadas.Latitude, res2.Latitude);
            Assert.Equal(armazem2.Coordenadas.Longitude, res2.Longitude);

        }

        [Fact]
        public void TestGetArmazemByCoordenadas()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.getByCoordenadas(41.15f, -8.62f)).Returns(Task.FromResult(armazem));
            var result = _controller.GetGetByCoordenadas(41.15f, -8.62f);
            Assert.NotNull(result);

            //Check if result have the same values as the armazem
            Assert.Equal(armazem.Designacao.Designacao, result.Result.Value.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, result.Result.Value.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, result.Result.Value.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, result.Result.Value.Longitude);
        }

        [Fact]
        public void TestUpdateArmazem()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            Armazem armazem2 = new Armazem(("111"), "Armazem2", "Rua2", "Porto2", "4020-000", 42.15f, -9.62f, 200f);
            ArmazemDto armazemDto = ArmazemMapper.ToDto(armazem2);
            repository.Setup(x => x.GetByIdAsync(armazem2.Id)).Returns(Task.FromResult(armazem));
            unityOfWork.Setup(x => x.CommitAsync()).Returns(Task.FromResult(1));
            var result2 = _controller.Update(armazem2.Id.Value, armazemDto);
            Assert.NotNull(result2);

            //Get Updated Armazem
            repository.Setup(x => x.GetByIdAsync(armazem2.Id)).Returns(Task.FromResult(armazem2));

            //Get by id updated armazem
            var result = _controller.GetGetById(armazem2.Id.Value);
            Assert.NotNull(result);

            //Check if result have the same values as the armazem
            Assert.Equal(armazem2.Designacao.Designacao, result.Result.Value.Designacao);
            Assert.Equal(armazem2.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(armazem2.Endereco.Morada, result.Result.Value.Morada);
            Assert.Equal(armazem2.Coordenadas.Latitude, result.Result.Value.Latitude);
            Assert.Equal(armazem2.Coordenadas.Longitude, result.Result.Value.Longitude);

        }

        [Fact]
        public void TestGetArmazemByDesignacao()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f,200f);
            repository.Setup(x => x.getByDesignacao("Armazem1")).Returns(Task.FromResult(armazem));
            var result = _controller.GetGetByDesignacao("Armazem1");
            Assert.NotNull(result);
            Assert.Equal(armazem.Designacao.Designacao, result.Result.Value.Designacao);
            Assert.Equal(armazem.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            Assert.Equal(armazem.Endereco.Morada, result.Result.Value.Morada);
            Assert.Equal(armazem.Coordenadas.Latitude, result.Result.Value.Latitude);
            Assert.Equal(armazem.Coordenadas.Longitude, result.Result.Value.Longitude);
        }

        [Fact]
        public void TestInibirArmazemComSucesso()
        {
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repository.Setup(x => x.AddAsync(armazem)).Returns(Task.FromResult(armazem));
        
            var result = _controller.Inibir(armazem.Id.ToString());

            bool atualResult =  result.Result.Value.Active;
            bool expResult = false;
          
            Assert.NotNull(result);
            //Assert.Equal(armazem.Designacao.Designacao, result.Result.Value.Designacao);
            //Assert.Equal(armazem.Endereco.CodigoPostal, result.Result.Value.CodigoPostal);
            //Assert.Equal(armazem.Endereco.Morada, result.Result.Value.Morada);
            //Assert.Equal(armazem.Coordenadas.Latitude, result.Result.Value.Latitude);
           // Assert.Equal(armazem.Coordenadas.Longitude, result.Result.Value.Longitude);
            Assert.Equal(atualResult, expResult);
        }

    }
}