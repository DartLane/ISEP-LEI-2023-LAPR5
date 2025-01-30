using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Middlewares;
using DDDSample1.Domain.User;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace DDDSample1.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserService _service;

        private readonly IConfiguration _config;

        public LoginController(IConfiguration config,UserService service)
        {
            _config = config;
            _service = service;
        }


        // GET: api/Entregas
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(Login login)
        {
            try
            {
                IActionResult response = Unauthorized();
                
                var useraux = _service.GetUserByEmail(login.Email);
                UserDTO user = (UserDTO) useraux.Result;
                    
                if (user != null)
                {
                    var tokenString = GenerateJWT(user); 

                    /*
                    //if(Request.Headers.TryGetValue("Authorization", out var auth)){Console.WriteLine(auth);}
                    var validationParameters = GetValidationParameters();
                    var tokenHandler = new JwtSecurityTokenHandler();
                    ClaimsPrincipal claim = tokenHandler.ValidateToken(tokenString.ToString(),validationParameters,out var token);
                    if(claim.FindFirstValue("role ").ToString() == "admin"){
                        Console.WriteLine("CARALHO");
                    }
                    */
                    
                    
                    

                    response = Ok(new
                    {
                        token = tokenString,
                        //userDetails = user,
                    });

                }
                return response;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        string GenerateJWT(UserDTO user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtAuth:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.userName.ToString()),
                new Claim("firstName", user.firstName.ToString()),
                new Claim("role ",user.userType.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };


            var token = new JwtSecurityToken(
                issuer: _config["JwtAuth:Issuer"],
                audience: _config["JwtAuth:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes((30)),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        private  TokenValidationParameters GetValidationParameters()
    {
        return new TokenValidationParameters()
       {    
                    ValidateIssuer = true,    
                    ValidateAudience = true,    
                    ValidateLifetime = true,    
                    ValidateIssuerSigningKey = true,    
                    ValidIssuer = _config["JwtAuth:Issuer"],    
                    ValidAudience = _config["JwtAuth:Audience"],    
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtAuth:Key"]))    
                };
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