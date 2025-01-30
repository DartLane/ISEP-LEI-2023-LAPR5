using DDDSample1.Domain.Shared;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Domain.Entregas
{
    public interface IEntregaRepository:IRepository<Entrega,EntregaId>
    {
        Task<List<Entrega>> GetByArmazemId(string armazemId);
        Task<List<Entrega>> GetOrderByArmazemAsc();
        Task<List<Entrega>> GetOrderByArmazemDesc();
        Task<List<Entrega>> GetOrderByDataAsc();
        Task<List<Entrega>> GetOrderByDataDesc();
        Task<List<Entrega>> GetInBetweenDates(string data1, string data2);
    }
}