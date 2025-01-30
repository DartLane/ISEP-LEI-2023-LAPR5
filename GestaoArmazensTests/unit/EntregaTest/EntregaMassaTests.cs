using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Shared;

namespace GestaoArmazensTests.unit.Entrega
{
   public class EntregaMassaTests
    {
        [Fact]
        public void CriarEntregaComMassa_Valida_MaiorqueZero()
        {
            var massa = new MassaKg(89.0F);

            Assert.Equal(89.0F, massa.massa);
           
        }
        
        [Fact]
        public void CriarEntregaComMassa_Valida2_MaiorqueZero()
        {
            var massa = new MassaKg(0.2F);

            Assert.Equal(0.2F, massa.massa);
           
        }
    
       [Fact]
       public void CriarEntregaComMassa_Invalida1_IgualaZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new MassaKg(0.0F));
           
        }


        [Fact]
        public void CriarEntregaComMassa_Invalida2_MenorqueZero()
        {
            Assert.Throws<BusinessRuleValidationException>(() => new MassaKg(-10F));
        }


    


    }
}