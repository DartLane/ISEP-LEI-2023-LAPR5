using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.User;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace DDDSample1.Middlewares
{
    
    public class IsAuth
    {
        public static Boolean VerifyToken(string auth){
            try{
            var validationParameters = new TokenValidationParameters()  {    
                ValidateIssuer = true,    
                ValidateAudience = true,    
                ValidateLifetime = true,    
                ValidateIssuerSigningKey = true,    
                ValidIssuer = "EletricGO",    
                ValidAudience = "EletricGO",    
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("WqcLIR743s1198JnfFXAS"))    
                };
            var tokenHandler = new JwtSecurityTokenHandler();
            ClaimsPrincipal claim = tokenHandler.ValidateToken(auth.ToString(),validationParameters,out var token);
            string role = claim.FindFirstValue("role ").ToString();
            if(role == "admin" || role == "gestor Armazens"){
                return true;
            }else{
                return false;
            }
            }catch{
                return false;
            }

        }

        public static Boolean VerifyTokenUsers(string auth){
            try{
            var validationParameters = new TokenValidationParameters()  {    
                ValidateIssuer = true,    
                ValidateAudience = true,    
                ValidateLifetime = true,    
                ValidateIssuerSigningKey = true,    
                ValidIssuer = "EletricGO",    
                ValidAudience = "EletricGO",    
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("WqcLIR743s1198JnfFXAS"))    
                };
            var tokenHandler = new JwtSecurityTokenHandler();
            ClaimsPrincipal claim = tokenHandler.ValidateToken(auth.ToString(),validationParameters,out var token);
            string role = claim.FindFirstValue("role ").ToString();
            if(role == "admin"){
                return true;
            }else{
                return false;
            }
            }catch{
                return false;
            }

        }
    }

}