using System;
using DDDSample1.Domain.Entregas;

namespace DDDSample1.Domain.Entregas
{
    public class EntregaMapper
    {
        public static EntregaDto ToDto(Entrega obj)
        {
            return new EntregaDto(obj.Id.AsGuid(),obj.tempodescarga.tempodescarga, obj.tempocarga.tempocarga, obj.data.Day, obj.data.Month, obj.data.Year, obj.massa.massa, obj.armazemId);
        }

        public static Entrega ToDomain(EntregaDto dto)
        {
            var entrega = new Entrega(dto.Tempodescarga, dto.Tempocarga, dto.Dia, dto.Mes, dto.Ano, dto.Massa, dto.ArmazemId);
            return entrega;
        }

    }
}