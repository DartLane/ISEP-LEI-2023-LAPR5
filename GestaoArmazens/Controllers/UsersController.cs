using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.User;
using DDDSample1.Middlewares;

namespace DDDSample1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _service;

        public UsersController(UserService service)
        {
            _service = service;
        }


        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetAll()
        {
            if (!Authorization())
            {
                return Unauthorized();
            }
            return await _service.GetAllAsync();
        }


        // GET: api/users
        [HttpGet("existing/users")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetAllExisting()
        {
            if (!Authorization())
            {
                return Unauthorized();
            }
            return await _service.GetAllExistingAsync();
        }

        // GET: api/Entregas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetGetById(Guid id)
        {
            if (!Authorization())
            {
                return Unauthorized();
            }
            var user = await _service.GetByIdAsync(new UserId(id));

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // GET: api/users/5
        [HttpGet("phone/{phoneNumber}")]
        public async Task<ActionResult<UserDTO>> GetGetByPhoneNumber(int phoneNumber)
        {
            if (!Authorization())
            {
                return Unauthorized();
            }
            var user = await _service.GetByPhoneNumberAsync(phoneNumber);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpGet("email/{id}")]
        public async Task<ActionResult<UserDTO>> GetGetByEmail(String id)
        {
            var user = await _service.GetUserByEmail(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/user
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Create(UserDTO dto)
        {
            try

            {
                if (!Authorization())
                {
                    return Unauthorized();
                }
                var user = await _service.AddAsync(dto);


                return user;

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UserDTO>> Update(Guid id, UserDTO dto)
        {
            if (!Authorization())
            {
                return Unauthorized();
            }
            if (id != dto.Id)
            {
                return BadRequest();
            }

            try
            {
                var user = await _service.UpdateAsync(dto);

                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<UserDTO>> HardDelete(String id)
        {
            try
            {
                if (!Authorization())
                {
                    return Unauthorized();
                }
                var fam = await _service.DeleteAsync(new UserId(id));

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

        [HttpDelete("{id}/soft")]
        public async Task<ActionResult<UserDTO>> Anonimizar(String id)
        {
            try
            {
                if (!Authorization())
                {
                    return Unauthorized();
                }
                var user = await _service.AnonimizarAsync(new UserId(id));

                if (user == null)
                {
                    return NotFound();
                }

                return Ok(user);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        private Boolean Authorization()
        {
            if (!Request.Headers.TryGetValue("Authorization", out var auth))
            {
                return false;
            }
            if (!IsAuth.VerifyTokenUsers(auth))
            {
                return false;
            }
            return true;
        }
    }
}