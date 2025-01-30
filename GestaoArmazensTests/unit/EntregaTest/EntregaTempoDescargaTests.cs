using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.Entrega
{
   public class EntregaTempoDesargaTests
    {
        [Fact]
        public void CriarEntregaComTempoDescarga_Valido_MaiorqueZero()
        {
            var tempoDescarga = new TempoDescargaMin(20);

            Assert.Equal(20, tempoDescarga.tempodescarga);
           
        }
    
        [Fact]
        public void CriarEntregaComTempoDesarga_Valido2_MaiorqueZero()
        {
            var tempoDescarga = new TempoDescargaMin(1);

            Assert.Equal(1, tempoDescarga.tempodescarga);
        }

        [Fact]
        public void CriarEntregaComTempoCarga_Invalido_IgualaZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new TempoDescargaMin(0));
        
        }

          [Fact]
        public void CriarEntregaComTempoCarga_Invalido2_MenorqueZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new TempoDescargaMin(-10));
        }

    

    }
}