using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Trucks
{
    public class TruckService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITruckRepository _repo;

        public TruckService(IUnitOfWork unitOfWork, ITruckRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<List<TruckDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<TruckDto> listDto = list.ConvertAll<TruckDto>(truck =>
                new TruckDto(truck.Id.AsGuid(), truck.color, truck.length));

            return listDto;
        }

        public async Task<TruckDto> GetByIdAsync(TruckId id)
        {
            var truck = await this._repo.GetByIdAsync(id);

            if (truck == null)
                return null;

            return new TruckDto(truck.Id.AsGuid(), truck.color, truck.length);
        }

        public async Task<TruckDto> AddAsync(CreatingTruckDto dto)
        {

            var Truck = new Truck(dto.color, dto.length);

            await this._repo.AddAsync(Truck);

            await this._unitOfWork.CommitAsync();

            return new TruckDto(Truck.Id.AsGuid(), Truck.color, Truck.length);
        }

        public async Task<TruckDto> UpdateAsync(TruckDto dto)
        {

            var Truck = await this._repo.GetByIdAsync(new TruckId(dto.Id));

            if (Truck == null)
                return null;

            // change all fields
            Truck.ChangeColor(dto.color);
            Truck.ChangeLength(dto.length);

            await this._unitOfWork.CommitAsync();

            return new TruckDto(Truck.Id.AsGuid(), Truck.color, Truck.length);
        }

        public async Task<TruckDto> InactivateAsync(TruckId id)
        {
            var Truck = await this._repo.GetByIdAsync(id);

            if (Truck == null)
                return null;

            await this._unitOfWork.CommitAsync();

            return new TruckDto(Truck.Id.AsGuid(), Truck.color, Truck.length);
        }

        public async Task<TruckDto> DeleteAsync(TruckId id)
        {
            var Truck = await this._repo.GetByIdAsync(id);

            if (Truck == null)
                return null;

            this._repo.Remove(Truck);
            await this._unitOfWork.CommitAsync();

            return new TruckDto(Truck.Id.AsGuid(), Truck.color, Truck.length);
        }
    }
}