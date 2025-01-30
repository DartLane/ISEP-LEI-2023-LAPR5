using DDDSample1.Domain.Armazens;

namespace GestaoArmazensTests.unit.ArmazemEnderecoUnitTests
{
    public class ArmazemEnderecoUnitTests
    {
        [Fact]
        public void CreateArmazemEndereco()
        {
            var armazemEndereco = new ArmazemEndereco("Rua do Armazem", "Porto", "1234-567");

            Assert.Equal("Rua do Armazem", armazemEndereco.Morada);
            Assert.Equal("Porto", armazemEndereco.Localidade);
            Assert.Equal("1234-567", armazemEndereco.CodigoPostal);
        }

        [Fact]
        public void CreateArmazemEnderecoInvalido()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemEndereco("", "Porto", "1234-567"));
        }

        [Fact]
        public void CreateArmazemEnderecoInvalido2()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemEndereco("Rua do Armazem", "", "1234-567"));
        }

        [Fact]
        public void CreateArmazemEnderecoInvalido3()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemEndereco("Rua do Armazem", "Porto", ""));
        }

        [Fact]
        public void CreateArmazemEnderecoInvalido4()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemEndereco(null, "Porto", "1234-567"));
        }

       
    }
}