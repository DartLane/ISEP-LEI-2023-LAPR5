using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Middlewares;
using DDDSample1.Domain.Entregas;

namespace DDDSample1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntregasController : ControllerBase
    {
        private readonly EntregaService _service;

        public EntregasController(EntregaService service)
        {
            _service = service;
        }


        // GET: api/Entregas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        // GET: api/Entregas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EntregaDto>> GetGetById(Guid id)
        {
            var entrega = await _service.GetByIdAsync(new EntregaId(id));

            if (entrega == null)
            {
                return NotFound();
            }

            return entrega;
        }

        [HttpGet("armazem/{armazemId}")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetGetByArmazem(String armazemId)
        {
            return await _service.GetByArmazemAsync(armazemId);
        }

        [HttpGet("armazemAsc")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetOrderByArmazemAsc()
        {
            if(!Authorization()){
                return Unauthorized();
            }
            return await _service.GetOrderByArmazemAscAsync();
        }

        [HttpGet("armazemDesc")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetOrderByArmazemDesc()
        {
            if(!Authorization()){
                return Unauthorized();
            }
            return await _service.GetOrderByArmazemDescAsync();
        }

        [HttpGet("dataAsc")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetOrderByDataAsc()
        {
            if(!Authorization()){
                return Unauthorized();
            }
            return await _service.GetOrderByDataAscAsync();
        }

        [HttpGet("dataDesc")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetOrderByDataDesc()
        {
            if(!Authorization()){
                return Unauthorized();
            }
            return await _service.GetOrderByDataDescAsync();
        }

        [HttpGet("data/data1={data1}&data2={data2}")]
        public async Task<ActionResult<IEnumerable<EntregaDto>>> GetInBetweenDates(String data1, String data2)
        {

            return await _service.GetInBetweenDates(data1, data2);
        }

        // POST: api/Entrega
        [HttpPost]
        public async Task<ActionResult<EntregaDto>> Create(EntregaDto dto)
        {
            
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }

                var entrega = await _service.AddAsync(dto);


                return entrega;

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // PUT: api/Entregas/F5
        [HttpPut("{id}")]
        public async Task<ActionResult<EntregaDto>> Update(Guid id, EntregaDto dto)
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
                var entrega = await _service.UpdateAsync(dto);

                if (entrega == null)
                {
                    return NotFound();
                }
                return Ok(entrega);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });

            }
        }

        // PUT: api/Entregas/F5
        [HttpPatch("{id}")]
        public async Task<ActionResult<EntregaDto>> UpdatePatch(Guid id, EntregaDto dto)
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
                var fam = await _service.UpdateAsync(dto);

                if (fam == null)
                {
                    return NotFound();
                }
                return Ok(fam);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // DELETE: api/Entregas/F5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<EntregaDto>> HardDelete(String id)
        {
            try
            {
                if(!Authorization()){
                    return Unauthorized();
                }
                var fam = await _service.DeleteAsync(new EntregaId(id));

                if (fam == null)
                {
                    return NotFound();
                }

                return Ok(fam);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
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