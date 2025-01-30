using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Armazens;
using DDDSample1.Controllers;
using DDDSample1.Domain.Shared;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace GestaoArmazensTests.integration.EntregasControllerServiceIntegrationTests
{
    public class EntregasControllerServiceIntegrationTests
    {
        private EntregaService _service;
        private ArmazemService _serviceArmazem;
        private EntregasController _controller;
        private ArmazensController _controllerArmazem;
        private Mock<IEntregaRepository> repository = new Mock<IEntregaRepository>();
        private Mock<IArmazemRepository> repoarmazem = new Mock<IArmazemRepository>() ;
        private Mock<IUnitOfWork> unityOfWork = new Mock<IUnitOfWork>();

        public EntregasControllerServiceIntegrationTests()
        {
            _service = new EntregaService(unityOfWork.Object, repository.Object, repoarmazem.Object);
            _controller = new EntregasController(_service);
            _serviceArmazem = new ArmazemService(unityOfWork.Object,repoarmazem.Object);
            _controllerArmazem = new ArmazensController(_serviceArmazem);
        }

       
        [Fact]
        public void CriarEntregaTest()
        {
            //criar armazem para nao falhar
            CreatingArmazemDTO dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f , true);
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repoarmazem.Setup(x => x.AddAsync(armazem)).Returns(Task.FromResult(armazem));
            var result1 = _controllerArmazem.Create(dto);
            Assert.NotNull(result1);
            Assert.Equal(dto.Id, result1.Result.Value.Id);
            repoarmazem.Setup(x => x.GetByIdAsync(armazem.Id)).Returns(Task.FromResult(armazem));
            var result111 = _controllerArmazem.GetGetById(armazem.Id.Value);
            

            Guid id = Guid.NewGuid();
            EntregaDto dtoEntrega = new EntregaDto(id,15,25,04,11,2022,4.2f,"111");
            Entrega entrega = new Entrega(25,15,04,11,2022,4.2f,"111");
            repository.Setup(x => x.AddAsync(entrega)).Returns(Task.FromResult(entrega));
           
            var result = _controller.Create(dtoEntrega);
            Assert.NotNull(result);
           
            Assert.Equal(dtoEntrega.Tempocarga, result.Result.Value.Tempocarga);
            Assert.Equal(dtoEntrega.Tempodescarga, result.Result.Value.Tempodescarga);
            Assert.Equal(dtoEntrega.Dia, result.Result.Value.Dia);
            Assert.Equal(dtoEntrega.Mes, result.Result.Value.Mes);
            Assert.Equal(dtoEntrega.Ano, result.Result.Value.Ano);
            Assert.Equal(dtoEntrega.Massa, result.Result.Value.Massa);
            Assert.Equal(dtoEntrega.ArmazemId,result.Result.Value.ArmazemId);
        }

        [Fact]
        public void CriarEntregaTest_FalhaIdArmazemInvalido()
        {
            Guid id = Guid.NewGuid();
            EntregaDto dtoEntrega = new EntregaDto(id,15,25,04,11,2022,4.2f,"bbbb");
            Entrega entrega = new Entrega(25,15,04,11,2022,4.2f,"bbbb");
            repository.Setup(x => x.AddAsync(entrega)).Returns(Task.FromResult(entrega));
           
            var result = _controller.Create(dtoEntrega);
            Assert.ThrowsAsync<BusinessRuleValidationException>(() => result);
        }

        [Fact]
        public void CriarEntregaTest_FalhaIdArmazemNaoExiste()
        {
            Guid id = Guid.NewGuid();
            EntregaDto dtoEntrega = new EntregaDto(id,15,25,04,11,2022,4.2f,"000");
            Entrega entrega = new Entrega(25,15,04,11,2022,4.2f,"000");
            repository.Setup(x => x.AddAsync(entrega)).Returns(Task.FromResult(entrega));
           
            var result = _controller.Create(dtoEntrega);
            Assert.ThrowsAsync<BusinessRuleValidationException>(() => result);
        }

        [Fact]
        public void GetEntregasPorIdTest()
        {
            Entrega entrega = new Entrega(25,15,04,11,2022,4.2f,"111");
            repository.Setup(x => x.GetByIdAsync(entrega.Id)).Returns(Task.FromResult(entrega));
            
            var result = _controller.GetGetById(entrega.Id.AsGuid());
            Assert.NotNull(result);
           
            //Check if result have the same values as the armazem
            Assert.Equal(entrega.tempocarga.tempocarga, result.Result.Value.Tempocarga);
            Assert.Equal(entrega.tempodescarga.tempodescarga, result.Result.Value.Tempodescarga);
            Assert.Equal(entrega.data.Day, result.Result.Value.Dia);
            Assert.Equal(entrega.data.Month, result.Result.Value.Mes);
            Assert.Equal(entrega.data.Year, result.Result.Value.Ano);
            Assert.Equal(entrega.massa.massa, result.Result.Value.Massa);
            Assert.Equal(entrega.armazemId, result.Result.Value.ArmazemId);
        }


        [Fact]
        public void TestGetEntregaPorIdArmazem()
        {
            //criar armazem para nao falhar
            CreatingArmazemDTO dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f,200f, true);
            Armazem armazem = new Armazem(("111"), "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f);
            repoarmazem.Setup(x => x.AddAsync(armazem)).Returns(Task.FromResult(armazem));
            var result1 = _controllerArmazem.Create(dto);
            Assert.NotNull(result1);
            Assert.Equal(dto.Id, result1.Result.Value.Id);
            repoarmazem.Setup(x => x.GetByIdAsync(armazem.Id)).Returns(Task.FromResult(armazem));
            var result111 = _controllerArmazem.GetGetById(armazem.Id.Value);
            

            Entrega entrega1 = new Entrega(25,15,04,11,2022,4.2f,"111");
            Entrega entrega2 = new Entrega(30,10,05,11,2022,5.2f,"111");
            List<Entrega> entregas = new List<Entrega>();
            entregas.Add(entrega1);
            entregas.Add(entrega2);
            repository.Setup(x => x.GetByArmazemId(entrega1.armazemId)).Returns(Task.FromResult(entregas));
            
            var result = _controller.GetGetByArmazem(entrega1.armazemId);
            Assert.NotNull(result);
           
            
            var res1 = result.Result.Value.ToList()[0];
            Assert.Equal(entrega1.tempocarga.tempocarga, res1.Tempocarga);
            Assert.Equal(entrega1.tempodescarga.tempodescarga, res1.Tempodescarga);
            Assert.Equal(entrega1.data.Day, res1.Dia);
            Assert.Equal(entrega1.data.Month, res1.Mes);
            Assert.Equal(entrega1.data.Year, res1.Ano);
            Assert.Equal(entrega1.massa.massa, res1.Massa);
            Assert.Equal(entrega1.armazemId, res1.ArmazemId);

            var res2 = result.Result.Value.ToList()[1];
            Assert.Equal(entrega2.tempocarga.tempocarga, res2.Tempocarga);
            Assert.Equal(entrega2.tempodescarga.tempodescarga, res2.Tempodescarga);
            Assert.Equal(entrega2.data.Day, res2.Dia);
            Assert.Equal(entrega2.data.Month, res2.Mes);
            Assert.Equal(entrega2.data.Year, res2.Ano);
            Assert.Equal(entrega2.massa.massa, res2.Massa);
            Assert.Equal(entrega2.armazemId, res2.ArmazemId);
        }

        [Fact]
        public void GetTodasAsEntregasTest()
        {
            Entrega entrega1 = new Entrega(25,15,04,11,2022,4.2f,"111");
            Entrega entrega2 = new Entrega(30,10,05,11,2022,5.2f,"112");
            List<Entrega> entregas = new List<Entrega>();
            entregas.Add(entrega1);
            entregas.Add(entrega2);
           
            repository.Setup(x => x.GetAllAsync()).Returns(Task.FromResult(entregas));
            var result = _controller.GetAll();
            Assert.NotNull(result);
           
           
            var res1 = result.Result.Value.ToList()[0];
            Assert.Equal(entrega1.tempocarga.tempocarga, res1.Tempocarga);
            Assert.Equal(entrega1.tempodescarga.tempodescarga, res1.Tempodescarga);
            Assert.Equal(entrega1.data.Day, res1.Dia);
            Assert.Equal(entrega1.data.Month, res1.Mes);
            Assert.Equal(entrega1.data.Year, res1.Ano);
            Assert.Equal(entrega1.massa.massa, res1.Massa);
            Assert.Equal(entrega1.armazemId, res1.ArmazemId);

            var res2 = result.Result.Value.ToList()[1];
            Assert.Equal(entrega2.tempocarga.tempocarga, res2.Tempocarga);
            Assert.Equal(entrega2.tempodescarga.tempodescarga, res2.Tempodescarga);
            Assert.Equal(entrega2.data.Day, res2.Dia);
            Assert.Equal(entrega2.data.Month, res2.Mes);
            Assert.Equal(entrega2.data.Year, res2.Ano);
            Assert.Equal(entrega2.massa.massa, res2.Massa);
            Assert.Equal(entrega2.armazemId, res2.ArmazemId);
        }

        [Fact]
        public void UpdateEntregaTest()
        {
            Entrega entrega = new Entrega(25,15,04,11,2022,4.2f,"111");
            Entrega entrega2 = new Entrega(25,15,04,11,2022,5.2f,"111");
            EntregaDto entregaDto = EntregaMapper.ToDto(entrega2);
            repository.Setup(x => x.GetByIdAsync(entrega2.Id)).Returns(Task.FromResult(entrega));
            unityOfWork.Setup(x => x.CommitAsync()).Returns(Task.FromResult(1));
            var result2 = _controller.Update(entrega2.Id.AsGuid(), entregaDto);
            Assert.NotNull(result2);

            //Get Updated entrega
            repository.Setup(x => x.GetByIdAsync(entrega2.Id)).Returns(Task.FromResult(entrega2));

            //Get by id updated entrega
            var result = _controller.GetGetById(entrega2.Id.AsGuid());
            Assert.NotNull(result);

            
            Assert.Equal(entrega2.tempocarga.tempocarga, result.Result.Value.Tempocarga);
            Assert.Equal(entrega2.tempodescarga.tempodescarga, result.Result.Value.Tempodescarga);
            Assert.Equal(entrega2.data.Day, result.Result.Value.Dia);
            Assert.Equal(entrega2.data.Month, result.Result.Value.Mes);
            Assert.Equal(entrega2.data.Year, result.Result.Value.Ano);
            Assert.Equal(entrega2.massa.massa, result.Result.Value.Massa);
            Assert.Equal(entrega2.armazemId, result.Result.Value.ArmazemId);
        }
    }
}