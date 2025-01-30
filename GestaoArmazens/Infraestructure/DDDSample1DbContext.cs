using Microsoft.EntityFrameworkCore;
using DDDSample1.Domain.Trucks;
using DDDSample1.Domain.Armazens;
using DDDSample1.Domain.Entregas;
using DDDSample1.Domain.User;
using DDDSample1.Infrastructure.Trucks;
using DDDSample1.Infrastructure.Armazens;
using DDDSample1.Infrastructure.Entregas;
using DDDSample1.Infrastructure.Users;

namespace DDDSample1.Infrastructure
{
    public class DDDSample1DbContext : DbContext
    {

        public DDDSample1DbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Truck> Trucks { get; set; }

        public DbSet<Armazem> Armazens { get; set; }

        public DbSet<Entrega> Entregas {get; set;}

        public DbSet<User> Users {get; set;}
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TruckConfiguration());
            modelBuilder.ApplyConfiguration(new ArmazemEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new EntregaEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new UserEntityTypeConfiguration());
            
        }
    }
}