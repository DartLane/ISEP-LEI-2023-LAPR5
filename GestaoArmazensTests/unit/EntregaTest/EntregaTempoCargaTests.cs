using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.Entrega
{
   public class EntregaTempoCargaTests
    {
        [Fact]
        public void CriarEntregaComTempoCarga_Valido_MaiorqueZero()
        {
            var tempoCarga = new TempoCargaMin(20);

            Assert.Equal(20, tempoCarga.tempocarga);
           
        }
    
        [Fact]
        public void CriarEntregaComTempoCarga_Valido2_MaiorqueZero()
        {
            var tempoCarga = new TempoCargaMin(1);

            Assert.Equal(1, tempoCarga.tempocarga);
        }

        [Fact]
        public void CriarEntregaComTempoCarga_Invalido_IgualaZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new TempoCargaMin(0));
        
        }

          [Fact]
        public void CriarEntregaComTempoCarga_Invalido2_MenorqueZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new TempoCargaMin(-10));
        }

    

    }
}