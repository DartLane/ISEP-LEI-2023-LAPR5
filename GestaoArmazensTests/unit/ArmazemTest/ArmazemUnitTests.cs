using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Shared;


namespace GestaoArmazensTests.unit.ArmazemUnitTests
{

    public class ArmazemUnitTests
    {
        [Fact]
        public void CreateArmazem()
        {
            var dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -8.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void UpdateArmazem()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void DeleteArmazem()
        {
            var dto = new ArmazemDto("111", "Armazem3", "Rua3", "Porto3", "4003-000", 43.15f, -10.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void CreateArmazemWithInvalidLatitude()
        {
            var dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 91.15f, -8.62f, 200f, true);
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude));
        }

        [Fact]
        public void CreateArmazemWithInvalidLongitude()
        {
            var dto = new CreatingArmazemDTO("111", "Armazem1", "Rua1", "Porto", "4000-000", 41.15f, -181.62f, 200f, true);
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude));
        }


        [Fact]
        public void ChangeArmazemDesignacao()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.AlterarNome("Armazem3");

            Assert.Equal("Armazem3", armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void ChangeArmazemEndereco()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.AlterarEndereco("Rua3", "Porto3", "4003-000");

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal("Rua3", armazem.Endereco.Morada);
            Assert.Equal("Porto3", armazem.Endereco.Localidade);
            Assert.Equal("4003-000", armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void ChangeArmazemCoordenadas()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.AlterarCoordenadas(43.15f, -8.62f, 200f);

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(43.15f, armazem.Coordenadas.Latitude);
            Assert.Equal(-8.62f, armazem.Coordenadas.Longitude);
        }

        [Fact]
        public void InibirArmazemComSucesso()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.Inibir();

            bool atualResult = armazem.Active;
            bool expcResult = false ;

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
            Assert.Equal(expcResult, atualResult);
        }

        [Fact]
        public void InibirArmazemJaInibido()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, false);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.Inibir();

            bool atualResult = armazem.Active;
            bool expcResult = false ;

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
            Assert.Equal(expcResult, atualResult);
        }

        [Fact]
        public void DesinibirArmazemComSucesso()
        {
            var dto = new ArmazemDto("111", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, false);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.Desinibir();

            bool atualResult = armazem.Active;
            bool expcResult = true ;

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);
            Assert.Equal(expcResult, atualResult);
        }

        [Fact]
        public void DesinibirArmazemJaDesinibido()
        {
            var dto = new ArmazemDto("110", "Armazem2", "Rua2", "Porto2", "4002-000", 42.15f, -9.62f, 200f, true);
            var armazem = new DDDSample1.Domain.Armazens.Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);

            armazem.Desinibir();

            bool atualResult = armazem.Active;
            bool expcResult = true;

            Assert.Equal(dto.Designacao, armazem.Designacao.Designacao);
            Assert.Equal(dto.Morada, armazem.Endereco.Morada);
            Assert.Equal(dto.Localidade, armazem.Endereco.Localidade);
            Assert.Equal(dto.CodigoPostal, armazem.Endereco.CodigoPostal);
            Assert.Equal(dto.Latitude, armazem.Coordenadas.Latitude);
            Assert.Equal(dto.Longitude, armazem.Coordenadas.Longitude);

            Assert.Equal(expcResult, atualResult);
        }
    }
}