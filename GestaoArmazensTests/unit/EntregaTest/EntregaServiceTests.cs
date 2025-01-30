using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Shared;
using Moq;


namespace GestaoArmazensTests.unit.Entrega
{
    public class EntregaServiceTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly Mock<IEntregaRepository> _repo;
        private readonly Mock<IArmazemRepository> _repoarmazem;
        private readonly EntregaService _service;
        private readonly ArmazemService _serviceArmazem;
    
        public EntregaServiceTests()
        {
            this._unitOfWork = new Mock<IUnitOfWork>();
            this._repo = new Mock<IEntregaRepository>();
            this._repoarmazem = new Mock<IArmazemRepository>();
            this._service = new EntregaService(this._unitOfWork.Object, this._repo.Object,this._repoarmazem.Object);
            this._serviceArmazem = new ArmazemService(this._unitOfWork.Object,this._repoarmazem.Object);
        }
 
        [Fact]
        public async Task GetByIdAsyncTest()
        {
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"001");
            var entrega = EntregaMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<EntregaId>())).ReturnsAsync(entrega);
            var result = await this._service.GetByIdAsync(new EntregaId(dto.Id));


            Assert.Equal(dto.Tempocarga, result.Tempocarga);
            Assert.Equal(dto.Tempodescarga, result.Tempodescarga);
            Assert.Equal(dto.Dia, result.Dia);
            Assert.Equal(dto.Mes, result.Mes);
            Assert.Equal(dto.Ano, result.Ano);
            Assert.Equal(dto.Massa, result.Massa);
            Assert.Equal(dto.ArmazemId,result.ArmazemId);
        }
       
        [Fact]
        public async Task GetByIdArmazemAsyncTest()
        {
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"001");
            var entrega = EntregaMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<EntregaId>())).ReturnsAsync(entrega);
            var result = await this._service.GetByIdAsync(new EntregaId(dto.Id));


            Assert.Equal(dto.Tempocarga, result.Tempocarga);
            Assert.Equal(dto.Tempodescarga, result.Tempodescarga);
            Assert.Equal(dto.Dia, result.Dia);
            Assert.Equal(dto.Mes, result.Mes);
            Assert.Equal(dto.Ano, result.Ano);
            Assert.Equal(dto.Massa, result.Massa);
            Assert.Equal(dto.ArmazemId,result.ArmazemId);
        }
        
        [Fact]
        public async Task AddAsync1_PassaPorArmazemValido()
        {
            //criar armazem e guarda-o no movk repositorio
            var dto1 = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f, true);
            var armazem = ArmazemMapper.ToDomain(dto1);
            var result1 = await this._serviceArmazem.AddAsync(dto1);
            _repoarmazem.Setup(x => x.GetByIdAsync(It.IsAny<ArmazemId>())).ReturnsAsync(armazem);
            Assert.Equal(dto1.Designacao, result1.Designacao);

            //criar entrega
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"111");
            var entrega = EntregaMapper.ToDomain(dto);
            var result = await this._service.AddAsync(dto);
         
            Assert.Equal(dto.Tempocarga, result.Tempocarga);
            Assert.Equal(dto.Tempodescarga, result.Tempodescarga);
            Assert.Equal(dto.Dia, result.Dia);
            Assert.Equal(dto.Mes, result.Mes);
            Assert.Equal(dto.Ano, result.Ano);
            Assert.Equal(dto.Massa, result.Massa);
            Assert.Equal(dto.ArmazemId,result.ArmazemId);
        }

        [Fact]
        public void AddAsync2_FalhaPorArmazemInvalido()
        {
            //criar entrega
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"bbbb");
            var entrega = EntregaMapper.ToDomain(dto);
            var result = _service.AddAsync(dto);
         
            Assert.ThrowsAsync<BusinessRuleValidationException>(() => result);
        }

        [Fact]
        public void AddAsync3_FalhaPorArmazemNaoExiste()
        {
            //criar entrega
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"000");
            var entrega = EntregaMapper.ToDomain(dto);
            var result = _service.AddAsync(dto);
         
            Assert.ThrowsAsync<BusinessRuleValidationException>(() => result);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            Guid id = Guid.NewGuid();
            var dto = new EntregaDto(id,15,25,04,11,2022,4.2f,"111");
            var entrega = EntregaMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<EntregaId>())).ReturnsAsync(entrega);
            var result = await this._service.UpdateAsync(dto);

        
            Assert.Equal(dto.Tempocarga, result.Tempocarga);
            Assert.Equal(dto.Tempodescarga, result.Tempodescarga);
            Assert.Equal(dto.Dia, result.Dia);
            Assert.Equal(dto.Mes, result.Mes);
            Assert.Equal(dto.Ano, result.Ano);
            Assert.Equal(dto.Massa, result.Massa);
            Assert.Equal(dto.ArmazemId,result.ArmazemId);
        }
       
    }
    
}
