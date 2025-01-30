using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Trucks;
using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.User;
using DDDSample1.Infrastructure.Armazens;
using DDDSample1.Infrastructure.Entregas;
using DDDSample1.Infrastructure.Users;
using DDDSample1.Infrastructure.Infrastructure.TruckRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace DDDSample1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddDbContext<DDDSample1DbContext>(opt =>
                opt.UseInMemoryDatabase("DDDSample1DB")
                .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>());


            /* services.AddDbContext<DDDSample1DbContext>(opt =>
                opt.UseSqlServer("-")
                .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>()); */
            

            services.AddCors(opt =>
            {
                opt.AddPolicy("IT3Client",
                    b => b.WithOrigins("http://localhost:4200","http://127.0.0.1:3040","*.netlify.app","https://tubular-trifle-9221a2.netlify.app")
                    .AllowAnyMethod().AllowAnyHeader().AllowCredentials().SetIsOriginAllowed((host) => true));
            }
            );

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters    
                {    
                    ValidateIssuer = true,    
                    ValidateAudience = true,    
                    ValidateLifetime = true,    
                    ValidateIssuerSigningKey = true,    
                    ValidIssuer = Configuration["JwtAuth:Issuer"],    
                    ValidAudience = Configuration["JwtAuth:Issuer"],    
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtAuth:Key"])) ,
                    ClockSkew = TimeSpan.Zero   
                };   
                services.AddCors();
            });

            ConfigureMyServices(services);
            services.AddControllers().AddNewtonsoftJson();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors("IT3Client");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            //app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        public void ConfigureMyServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<ITruckRepository, TruckRepository>();
            services.AddTransient<TruckService>();

            services.AddTransient<IArmazemRepository, ArmazemRepository>();
            services.AddTransient<ArmazemService>();

            services.AddTransient<IEntregaRepository, EntregaRepository>();
            services.AddTransient<EntregaService>();

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<UserService>();
        }
    }
}
