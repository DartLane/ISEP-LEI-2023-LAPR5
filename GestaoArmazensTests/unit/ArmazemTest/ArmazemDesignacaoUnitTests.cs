using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.ArmazemDesignacaoUnitTests
{
    public class ArmazemDesignacaoUnitTests
    {
        [Fact]
        public void CreateArmazemDesignacao()
        {
            var armazemDesignacao = new ArmazemDesignacao("Armazem 1");

            Assert.Equal("Armazem 1", armazemDesignacao.Designacao);
        }

        [Fact]
        public void CreateArmazemDesignacaoInvalido()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemDesignacao(""));
        }

        [Fact]
        public void CreateArmazemDesignacaoInvalido2()
        {
            Assert.Throws<ArgumentNullException>(() => new ArmazemDesignacao(null));
        }

        [Fact]
        public void CreateArmazemDesignacaoInvalido3()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new ArmazemDesignacao("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
        }


    }
}