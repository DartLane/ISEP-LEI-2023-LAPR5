using DDDSample1.Domain.Entregas;
using DDDSample1.Infrastructure.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;



namespace DDDSample1.Infrastructure.Entregas
{
    public class EntregaRepository : BaseRepository<Entrega, EntregaId>, IEntregaRepository
    {
        private readonly DDDSample1DbContext context;
        public EntregaRepository(DDDSample1DbContext context) : base(context.Entregas)
        {
            this.context = context;
        }

        public async Task<List<Entrega>> GetByArmazemId(string armazemId)
        {
            return await this.context.Entregas.FromSqlRaw("SELECT * FROM [ddd].[Entrega] where armazemId = '" + armazemId + "' ").ToListAsync();
        }

        public async Task<List<Entrega>> GetOrderByArmazemAsc()
        {
            return await this.context.Entregas.FromSqlRaw("SELECT TOP (1000000) * FROM [ddd].[Entrega] ORDER BY armazemId").ToListAsync();
        }

        public async Task<List<Entrega>> GetOrderByArmazemDesc()
        {
            return await this.context.Entregas.FromSqlRaw("SELECT TOP (1000000) * FROM [ddd].[Entrega] ORDER BY armazemId DESC").ToListAsync();
        }

        public async Task<List<Entrega>> GetOrderByDataAsc()
        {
            return await this.context.Entregas.FromSqlRaw("SELECT TOP (1000000) * FROM [ddd].[Entrega] ORDER BY data").ToListAsync();
        }

        public async Task<List<Entrega>> GetOrderByDataDesc()
        {
            return await this.context.Entregas.FromSqlRaw("SELECT TOP (1000000) * FROM [ddd].[Entrega] ORDER BY data DESC").ToListAsync();
        }

        public async Task<List<Entrega>> GetInBetweenDates(string data1, string data2)
        {
            return await this.context.Entregas.FromSqlRaw("SELECT * FROM [ddd].[Entrega] WHERE data BETWEEN '"+data1+"' and '"+data2+"'").ToListAsync();
        }
    }
}