using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DDDSample1.Domain.User;

namespace DDDSample1.Infrastructure.Users

{
    internal class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure ( EntityTypeBuilder<User> builder){
            
            builder.ToTable("User", SchemaNames.DDDSample1);
            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.phoneNumber);
            builder.OwnsOne(b => b.email);
            builder.OwnsOne(b => b.password);
            builder.OwnsOne(b => b.userType);
            builder.OwnsOne(b => b.userName);

        }
    }



}