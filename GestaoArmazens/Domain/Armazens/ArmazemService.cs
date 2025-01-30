using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using System;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IArmazemRepository _repo;

        public ArmazemService(IUnitOfWork unitOfWork, IArmazemRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<ArmazemDto> AddAsync(CreatingArmazemDTO dto)
        {
            var armazem = ArmazemMapper.ToDomain(dto);

            await this._repo.AddAsync(armazem);

            await this._unitOfWork.CommitAsync();

            return ArmazemMapper.ToDto(armazem);
        }

        //-- editar armazem
        public async Task<ArmazemDto> UpdateAsync(ArmazemDto dto)
        {

            var Armazem = await this._repo.GetByIdAsync(new ArmazemId(dto.Id));

            if (Armazem == null)
                return null;

            // change all fields
            Armazem.AlterarNome(dto.Designacao);
            Armazem.AlterarEndereco(dto.Morada, dto.Localidade, dto.CodigoPostal);
            Armazem.AlterarCoordenadas(dto.Latitude, dto.Longitude, dto.Altitude);

            await this._unitOfWork.CommitAsync();

            return ArmazemMapper.ToDto(Armazem);
        }

        public async Task<ArmazemDto> GetByIdAsync(ArmazemId id)
        {
            var armazem = await this._repo.GetByIdAsync(id);

            if (armazem == null)
                return null;

            return ArmazemMapper.ToDto(armazem);
        }

        public Task AddAsync(ArmazemDto dto1)
        {
            throw new NotImplementedException();
        }

        public async Task<ArmazemDto> GetByIdAvailableAsync(string id)
        {
            var vs = await this._repo.getById(id);

            if (vs == null)
                return null;

            return ArmazemMapper.ToDto(vs);
        }

        public async Task<List<ArmazemDto>> GetByLocalidadeAsync(string localidade)
        {
            var list = await this._repo.getByLocalidade(localidade);

            List<ArmazemDto> listDto = list.ConvertAll<ArmazemDto>(arm => ArmazemMapper.ToDto(arm
            ));

            return listDto;
        }

        public async Task<List<ArmazemDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<ArmazemDto> listDto = list.ConvertAll<ArmazemDto>(arm => ArmazemMapper.ToDto(arm
            ));

            return listDto;
        }

        public async Task<ArmazemDto> GetByCoordenadasAsync(float latitude, float longitude)
        {
            var vs = await this._repo.getByCoordenadas(latitude, longitude);

            if (vs == null)
                return null;

            return ArmazemMapper.ToDto(vs);
        }

        public async Task<ArmazemDto> GetByDesignacaoAsync(string designacao)
        {
            var vs = await this._repo.getByDesignacao(designacao);

            if (vs == null)
                return null;

            return ArmazemMapper.ToDto(vs);
        }

        public async Task<ArmazemDto> DeleteAsync(ArmazemId id)
        {
            var armazem = await this._repo.GetByIdAsync(id);

            if (armazem == null)
                return null;

            this._repo.Remove(armazem);
            await this._unitOfWork.CommitAsync();

            return ArmazemMapper.ToDto(armazem);
        }

        public async Task<InibirArmazemDTO> InibirAsync(ArmazemId id) {
            var armazem = await this._repo.GetByIdAsync(id);

            if (armazem == null)
                return null;

            armazem.Inibir();
            

            await this._unitOfWork.CommitAsync();

            return ArmazemMapper.ToDtoInibir(armazem);
        }

        public async Task<InibirArmazemDTO> DesinibirAsync(ArmazemId id) {
            var armazem = await this._repo.GetByIdAsync(id);

            if (armazem == null)
                return null;

            armazem.Desinibir();
            

            await this._unitOfWork.CommitAsync();

            return ArmazemMapper.ToDtoInibir(armazem);
        }

    }
}