using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Middlewares;
using DDDSample1.Domain.Armazens;

namespace DDDSample1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArmazensController : ControllerBase
    {

        private readonly ArmazemService _service;

        public ArmazensController(ArmazemService service)
        {
            _service = service;
        }

        // POST: api/Armazens
        [HttpPost]
        public async Task<ActionResult<ArmazemDto>> Create(CreatingArmazemDTO dto)
        {
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }
                var armazem = await _service.AddAsync(dto);

                return armazem;
                //return CreatedAtAction(nameof(GetGetById), new { id = armazem.Id }, armazem);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET: api/Armazens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArmazemDto>>> GetAll()
        {
            if(!Authorization()){
                    return Unauthorized();
            }
            return await _service.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ArmazemDto>> GetGetById(String id)
        {
            if(!Authorization()){
                return Unauthorized();
            }
            var armazem = await _service.GetByIdAsync(new ArmazemId(id));

            if (armazem == null)
            {
                return NotFound();
            }

            return armazem;
        }

        [HttpGet("id/{id}")]
        public async Task<ActionResult<ArmazemDto>> GetGetByIdAvailable(String id)
        {
            if(!Authorization()){
                return Unauthorized();
            }
            var armazem = await _service.GetByIdAvailableAsync(id);

            if (armazem == null)
            {
                return NotFound();
            }

            return armazem;
        }


        [HttpGet("localidade/{localidade}")]
        public async Task<ActionResult<IEnumerable<ArmazemDto>>> GestGetByLocalidade(String localidade)
        {
            if(!Authorization()){
                return Unauthorized();
            }
            var armazem = await _service.GetByLocalidadeAsync(localidade);

            if (armazem == null)
            {
                return NotFound();
            }

            return armazem;
        }

        [HttpGet("designacao/{designacao}")]
        public async Task<ActionResult<ArmazemDto>> GetGetByDesignacao(String designacao)
        {
            if(!Authorization()){
                return Unauthorized();
            }
            var armazem = await _service.GetByDesignacaoAsync(designacao);

            if (armazem == null)
            {
                return NotFound();
            }

            return armazem;
        }

        [HttpGet("coordenadas/latitude={latitude}&longitude={longitude}")]
        public async Task<ActionResult<ArmazemDto>> GetGetByCoordenadas(float latitude, float longitude)
        {
            var armazem = await _service.GetByCoordenadasAsync(latitude, longitude);

            if (armazem == null)
            {
                return NotFound();
            }

            return armazem;
        }

        // PUT: api/Trucks/5
        [HttpPut("{id}")]
        public async Task<ActionResult<ArmazemDto>> Update(String id, ArmazemDto dto)
        {
            if(!Authorization()){
                return Unauthorized();
            }
            if (id != dto.Id)
            {
                return BadRequest();
            }

            try
            {
                var armazem = await _service.UpdateAsync(dto);

                if (armazem == null)
                {
                    return NotFound();
                }
                return Ok(armazem);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        // DELETE: api/Entregas/F5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<ArmazemDto>> HardDelete(String id)
        {
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }
                var fam = await _service.DeleteAsync(new ArmazemId(id));

                if (fam == null)
                {
                    return NotFound();
                }

                return Ok(fam);
            }
            catch(BusinessRuleValidationException ex)
            {
               return BadRequest(new {Message = ex.Message});
            }
        }

        // DELETE: api/Armazens
        [HttpDelete("{id}")]
        public async Task<ActionResult<InibirArmazemDTO>> Inibir(String id)
        {
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }
                var armazem = await _service.InibirAsync(new ArmazemId(id));

                if (armazem == null)
                {
                    return NotFound();
                }

                return Ok(armazem);
            }
            catch(BusinessRuleValidationException ex)
            {
               return BadRequest(new {Message = ex.Message});
            }
        }

        // Put: api/Armazens/Desinibir/id
        [HttpPut("desinibir/{id}")]
        public async Task<ActionResult<InibirArmazemDTO>> Desinibir(String id)
        {
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }
                var armazem = await _service.DesinibirAsync(new ArmazemId(id));

                if (armazem == null)
                {
                    return NotFound();
                }

                return Ok(armazem);
            }
            catch(BusinessRuleValidationException ex)
            {
               return BadRequest(new {Message = ex.Message});
            }
        }

        private Boolean Authorization(){
            if(!Request.Headers.TryGetValue("Authorization", out var auth)){
                return false;
            }
            if(!IsAuth.VerifyToken(auth)){
                return false;
            }
            return true;
        }

    }

}