using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.ArmazemCoordenadasTests
{
    public class ArmazemCoordenadasTests
    {
        [Fact]
        public void CreateArmazemCoordenadasValidas()
        {
            var armazemCoordenadas = new ArmazemCoordenadas(11.0F, 22.0F, 200f);

            Assert.Equal(11.0F, armazemCoordenadas.Latitude);
            Assert.Equal(22.0F, armazemCoordenadas.Longitude);
        }

        [Fact]
        public void CreateArmazemCoordenadasValidas2()
        {
            var armazemCoordenadas = new ArmazemCoordenadas(89.0F, 179.0F, 200f);

            Assert.Equal(89.0F, armazemCoordenadas.Latitude);
            Assert.Equal(179.0F, armazemCoordenadas.Longitude);
        }

        [Fact]
        public void CreateArmazemCoordenadasValidas3()
        {
            var armazemCoordenadas = new ArmazemCoordenadas(-89.0F, -179.0F, 200f);

            Assert.Equal(-89.0F, armazemCoordenadas.Latitude);
            Assert.Equal(-179.0F, armazemCoordenadas.Longitude);
            Assert.Equal(200f, armazemCoordenadas.Altitude);
        }




        [Fact]
        public void CreateArmazemCoordenadasInvalidas()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(91.0F, 22.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas2()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(11.0F, 181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas3()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(-91.0F, 22.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas4()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(11.0F, -181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas5()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(91.0F, 181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas6()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(-91.0F, -181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas7()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(91.0F, -181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas8()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(-91.0F, 181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas9()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(91.0F, 181.0F, 200f));
        }

        [Fact]
        public void CreateArmazemCoordenadasInvalidas10()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemCoordenadas(-91.0F, -181.0F, 200f));
        }

    }
}