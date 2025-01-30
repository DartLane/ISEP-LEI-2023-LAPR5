using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Shared;


namespace GestaoArmazensTests.unit.EntregaUnitTests
{

    public class EntregaUnitTests
    {
        [Fact]
        public void CriarEntrega()
        {
            Guid idEntrega = Guid.NewGuid();
            var dto = new EntregaDto(idEntrega,15,25,04,11,2022,4.2f,"144");
            var entrega = new DDDSample1.Domain.Entregas.Entrega(dto.Tempodescarga,dto.Tempocarga,dto.Dia,dto.Mes,dto.Ano,dto.Massa,dto.ArmazemId);

            Assert.Equal(dto.Tempocarga, entrega.tempocarga.tempocarga);
            Assert.Equal(dto.Tempodescarga, entrega.tempodescarga.tempodescarga);
            Assert.Equal(dto.Dia, entrega.data.Day);
            Assert.Equal(dto.Mes, entrega.data.Month);
            Assert.Equal(dto.Ano, entrega.data.Year);
            Assert.Equal(dto.Massa, entrega.massa.massa);  
        }

        [Fact]
        public void CriarEntrega_Invalida_MassaIgualaZero()
        {
            Guid idEntrega = Guid.NewGuid();
            var dto = new EntregaDto(idEntrega,15,25,04,11,2022,0,"144");
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Entregas.Entrega(dto.Tempodescarga,dto.Tempocarga,dto.Dia,dto.Mes,dto.Ano,dto.Massa,dto.ArmazemId));
        }

        [Fact]
        public void CriarEntrega_Invalida_TempoCargaNegativo()
        {
            Guid idEntrega = Guid.NewGuid();
            var dto = new EntregaDto(idEntrega,-2,25,04,11,2022,4.2f,"144");
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Entregas.Entrega(dto.Tempodescarga,dto.Tempocarga,dto.Dia,dto.Mes,dto.Ano,dto.Massa,dto.ArmazemId));
        }

        [Fact]
        public void CriarEntrega_Invalida_TempoDescargaNegativo()
        {
            Guid idEntrega = Guid.NewGuid();
            var dto = new EntregaDto(idEntrega,15,-10,04,11,2022,4.2f,"144");
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Entregas.Entrega(dto.Tempodescarga,dto.Tempocarga,dto.Dia,dto.Mes,dto.Ano,dto.Massa,dto.ArmazemId));
        }

        [Fact]
        public void CriarEntrega_Invalida_TempoDescargaeCargaNegativo()
        {
            Guid idEntrega = Guid.NewGuid();
            var dto = new EntregaDto(idEntrega,-1,-10,04,11,2022,4.2f,"144");
            Assert.Throws<BusinessRuleValidationException>(() => new DDDSample1.Domain.Entregas.Entrega(dto.Tempodescarga,dto.Tempocarga,dto.Dia,dto.Mes,dto.Ano,dto.Massa,dto.ArmazemId));
        }

    }

}