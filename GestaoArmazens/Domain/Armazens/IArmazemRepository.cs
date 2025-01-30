using DDDSample1.Domain.Shared;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Domain.Armazens
{
    public interface IArmazemRepository : IRepository<Armazem, ArmazemId>
    {
        //getById apenas retorna armazem se ele tiver ativo
        Task<Armazem> getById(string id);
        Task<List<Armazem>> getByLocalidade(string localidade);
        Task<Armazem> getByCoordenadas(float latitude, float longitude);
        Task<Armazem> getByDesignacao(string designacao);
    }
}