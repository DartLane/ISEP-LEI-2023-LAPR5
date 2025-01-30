using DDDSample1.Domain.Trucks;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Infrastructure.Infrastructure.TruckRepository
{
    public class TruckRepository : BaseRepository<Truck, TruckId>,ITruckRepository
    {
        public TruckRepository(DDDSample1DbContext context):base(context.Trucks)
        {
           
        }
    }
}