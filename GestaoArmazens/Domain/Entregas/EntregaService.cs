using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Armazens;
using System;

namespace DDDSample1.Domain.Entregas
{
    public class EntregaService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEntregaRepository _repo;

        private readonly IArmazemRepository _repoarmazem;

        public EntregaService(IUnitOfWork unitOfWork, IEntregaRepository repo,IArmazemRepository repoarmazem)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._repoarmazem = repoarmazem;
        }

        public async Task<List<EntregaDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();
            
            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<EntregaDto> GetByIdAsync(EntregaId id)
        {
            var entrega = await this._repo.GetByIdAsync(id);
            
            if(entrega == null)
                return null;

            return EntregaMapper.ToDto(entrega);
        }

        public async Task<List<EntregaDto>> GetByArmazemAsync(string armazemId)
        {
            await checkArmazemIdAsync(new ArmazemId(armazemId));

            var list = await this._repo.GetByArmazemId(armazemId);

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<List<EntregaDto>> GetOrderByArmazemAscAsync()
        {
            var list = await this._repo.GetOrderByArmazemAsc();

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<List<EntregaDto>> GetOrderByArmazemDescAsync()
        {
            var list = await this._repo.GetOrderByDataDesc();

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<List<EntregaDto>> GetOrderByDataAscAsync()
        {
            var list = await this._repo.GetOrderByDataAsc();

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<List<EntregaDto>> GetOrderByDataDescAsync()
        {
            var list = await this._repo.GetOrderByArmazemDesc();

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }

        public async Task<List<EntregaDto>> GetInBetweenDates(string data1, string data2)
        {
            var list = await this._repo.GetInBetweenDates(data1, data2);

            List<EntregaDto> listDto = list.ConvertAll<EntregaDto>(entrega => 
                EntregaMapper.ToDto(entrega));

            return listDto;
        }


        public async Task<EntregaDto> AddAsync(EntregaDto dto)
        {
            await checkArmazemIdAsync(new ArmazemId(dto.ArmazemId));
            var entrega = EntregaMapper.ToDomain(dto);


            await this._repo.AddAsync(entrega);

            await this._unitOfWork.CommitAsync();

            return EntregaMapper.ToDto(entrega);
        }


        public async Task<EntregaDto> UpdateAsync(EntregaDto dto)
        {
            var entrega = await this._repo.GetByIdAsync(new EntregaId(dto.Id)); 

            if (entrega == null)
                return null;   

            // change all field
            entrega.ChangeData(dto.Dia, dto.Mes, dto.Ano);
            entrega.ChangeMassaKg(dto.Massa);
            entrega.ChangeTempoCargaMin(dto.Tempocarga);
            entrega.ChangeTempoDescargaMin(dto.Tempodescarga);
            entrega.ChangeArmazemId(dto.ArmazemId);

            
            await this._unitOfWork.CommitAsync();

            return EntregaMapper.ToDto(entrega);
        }

         public async Task<EntregaDto> DeleteAsync(EntregaId id)
        {
            var entrega = await this._repo.GetByIdAsync(id); 

            if (entrega == null)
                return null;   

            this._repo.Remove(entrega);
            await this._unitOfWork.CommitAsync();

            return EntregaMapper.ToDto(entrega);
        }
        
        private async Task checkArmazemIdAsync(ArmazemId armazemId)
        {
           var armazem = await _repoarmazem.getById(armazemId.AsString());
           if (armazem == null)
                throw new BusinessRuleValidationException("Não existe nenhum armazem ativo com esse id");
        }
    }
}