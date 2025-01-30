using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Shared;
using Moq;


namespace GestaoArmazensTests.unit.Armazem
{
    public class ArmazemServiceUnitTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly Mock<IArmazemRepository> _repo;
        private readonly ArmazemService _service;


        public ArmazemServiceUnitTests()
        {
            this._unitOfWork = new Mock<IUnitOfWork>();
            this._repo = new Mock<IArmazemRepository>();
            this._service = new ArmazemService(this._unitOfWork.Object, this._repo.Object);
        }

        [Fact]
        public async Task AddAsync()
        {
            var dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f , true);
            var armazem = ArmazemMapper.ToDomain(dto);
            var result = await this._service.AddAsync(dto);

            Assert.Equal(dto.Designacao, result.Designacao);
            Assert.Equal(dto.Morada, result.Morada);
            Assert.Equal(dto.Localidade, result.Localidade);
            Assert.Equal(dto.CodigoPostal, result.CodigoPostal);
            Assert.Equal(dto.Latitude, result.Latitude);
            Assert.Equal(dto.Longitude, result.Longitude);
        }
        [Fact]
        public async Task AddAsync2()
        {
            var dto = new CreatingArmazemDTO("444", "Armazem4", "Ru4", "Porto4", "4040-000", 45.15f, -9.62f, 200f, true);
            var armazem = ArmazemMapper.ToDomain(dto);
            var result = await this._service.AddAsync(dto);

            Assert.Equal(dto.Designacao, result.Designacao);
            Assert.Equal(dto.Morada, result.Morada);
            Assert.Equal(dto.Localidade, result.Localidade);
            Assert.Equal(dto.CodigoPostal, result.CodigoPostal);
            Assert.Equal(dto.Latitude, result.Latitude);
            Assert.Equal(dto.Longitude, result.Longitude);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f , true);
            var armazem = ArmazemMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<ArmazemId>())).ReturnsAsync(armazem);
            var result = await this._service.UpdateAsync(dto);

            Assert.Equal(dto.Designacao, result.Designacao);
            Assert.Equal(dto.Morada, result.Morada);
            Assert.Equal(dto.Localidade, result.Localidade);
            Assert.Equal(dto.CodigoPostal, result.CodigoPostal);
            Assert.Equal(dto.Latitude, result.Latitude);
            Assert.Equal(dto.Longitude, result.Longitude);
        }

        [Fact]
        public async Task GetByIdAsync()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = ArmazemMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<ArmazemId>())).ReturnsAsync(armazem);
            var result = await this._service.GetByIdAsync(new ArmazemId(dto.Id));

            Assert.Equal(dto.Designacao, result.Designacao);
            Assert.Equal(dto.Morada, result.Morada);
            Assert.Equal(dto.Localidade, result.Localidade);
            Assert.Equal(dto.CodigoPostal, result.CodigoPostal);
            Assert.Equal(dto.Latitude, result.Latitude);
            Assert.Equal(dto.Longitude, result.Longitude);
        }

        [Fact]
        public async Task InibirAsync()
        {
            //armazem desinibido
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f , true);
            var armazem = ArmazemMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<ArmazemId>())).ReturnsAsync(armazem);

            //inibir armazem
            var result = await this._service.InibirAsync(armazem.Id);

            bool atualResult = result.Active;
            bool expResult = false;

            Assert.Equal(atualResult, expResult);
        }

        [Fact]
        public async Task DesinibirAsync()
        {   
            //armazem inibido
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f , false);
            var armazem = ArmazemMapper.ToDomain(dto);
            _repo.Setup(x => x.GetByIdAsync(It.IsAny<ArmazemId>())).ReturnsAsync(armazem);

            //desinibir
            var result = await this._service.DesinibirAsync(armazem.Id);

            bool atualResult = result.Active;
            bool expResult = true;

            Assert.Equal(atualResult, expResult);
        }

    }
}