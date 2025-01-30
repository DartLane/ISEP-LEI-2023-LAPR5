using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DDDSample1.Domain.Entregas;

namespace DDDSample1.Infrastructure.Entregas

{
    internal class EntregaEntityTypeConfiguration : IEntityTypeConfiguration<Entrega>
    {
        public void Configure ( EntityTypeBuilder<Entrega> builder){
            
            builder.ToTable("Entrega", SchemaNames.DDDSample1);
            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.massa);
            builder.OwnsOne(b => b.tempodescarga);
            builder.OwnsOne(b => b.tempocarga);

        }
    }



}