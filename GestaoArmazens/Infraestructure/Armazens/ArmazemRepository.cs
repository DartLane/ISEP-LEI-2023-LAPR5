using DDDSample1.Domain.Armazens;
using DDDSample1.Infrastructure.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;



namespace DDDSample1.Infrastructure.Armazens
{
    public class ArmazemRepository : BaseRepository<Armazem, ArmazemId>, IArmazemRepository
    {
        private readonly DDDSample1DbContext context;
        public ArmazemRepository(DDDSample1DbContext context) : base(context.Armazens)
        {
            this.context = context;
        }

        public async Task<Armazem> getById(string id)
        {
             return await this.context.Armazens.FromSqlRaw("SELECT a.* FROM [ddd].[Armazens] a where a.Id = '" + id + "'  AND a.Active = 1 ").FirstOrDefaultAsync();
        }

        public async Task<List<Armazem>> getByLocalidade(string localidade)
        {
            return await this.context.Armazens.FromSqlRaw("SELECT a.* FROM [ddd].[Armazens] a where a.Endereco_Localidade = '" + localidade + "' AND a.Active = 1 ").ToListAsync();
        }

        public async Task<Armazem> getByCoordenadas(float latitude, float longitude) 
        {
            return await this.context.Armazens.FromSqlRaw("SELECT a.* FROM [ddd].[Armazens] a where a.Coordenadas_Latitude = " + latitude + " AND a.Coordenadas_Longitude = " + longitude + "  AND a.Active = 1 ").FirstOrDefaultAsync();

        }

        public async Task<Armazem> getByDesignacao(string designacao)
        {
             return await this.context.Armazens.FromSqlRaw("SELECT a.* FROM [ddd].[Armazens] a where a.Designacao_Designacao = '" + designacao + "'  AND a.Active = 1 ").FirstOrDefaultAsync();
        }
    }
}