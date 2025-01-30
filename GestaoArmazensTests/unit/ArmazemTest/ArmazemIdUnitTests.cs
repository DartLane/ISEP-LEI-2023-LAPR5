using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.ArmazemIdUnitTests
{
    public class ArmazemIdUnitTests
    {
        [Fact]
        public void CreateArmazemIdNumeros()
        {
            var armazemId = new ArmazemId("111");

            Assert.Equal("111", armazemId.Value);
        }

        [Fact]
        public void CreateArmazemIdNumeros2()
        {
            var armazemId = new ArmazemId("222");

            Assert.Equal("222", armazemId.Value);
        }

        [Fact]
        public void CreateArmazemIdLetras()
        {
            var armazemId = new ArmazemId("aaa");

            Assert.Equal("aaa", armazemId.Value);
        }

        [Fact]
        public void CreateArmazemIdWithInvalidIdVazio()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId(""));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidIdEspaco()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId(" "));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidIdNull()
        {
            Assert.Throws<System.NullReferenceException>(() => new ArmazemId(null));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidId4Carateres()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId("1111"));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidId1Carater()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId("1"));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidId2Carateres()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId("11"));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidId5Carateres()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId("11111"));
        }

        [Fact]
        public void CreateArmazemIdWithInvalidId6Carateres()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemId("111111"));
        }



    }
}