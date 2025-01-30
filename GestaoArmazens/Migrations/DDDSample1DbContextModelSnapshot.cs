﻿// <auto-generated />
using System;
using DDDSample1.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDDNetCore.Migrations
{
    [DbContext(typeof(DDDSample1DbContext))]
    partial class DDDSample1DbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDDSample1.Domain.Armazens.Armazem", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Armazens", "ddd");
                });

            modelBuilder.Entity("DDDSample1.Domain.Entregas.Entrega", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("armazemId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("data")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Entrega", "ddd");
                });

            modelBuilder.Entity("DDDSample1.Domain.Trucks.Truck", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("length")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.ToTable("Trucks", "ddd");
                });

            modelBuilder.Entity("DDDSample1.Domain.User.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User", "ddd");
                });

            modelBuilder.Entity("DDDSample1.Domain.Armazens.Armazem", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.Armazens.ArmazemCoordenadas", "Coordenadas", b1 =>
                        {
                            b1.Property<string>("ArmazemId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<float>("Altitude")
                                .HasColumnType("real");

                            b1.Property<float>("Latitude")
                                .HasColumnType("real");

                            b1.Property<float>("Longitude")
                                .HasColumnType("real");

                            b1.HasKey("ArmazemId");

                            b1.ToTable("Armazens");

                            b1.WithOwner()
                                .HasForeignKey("ArmazemId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Armazens.ArmazemDesignacao", "Designacao", b1 =>
                        {
                            b1.Property<string>("ArmazemId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("Designacao")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("ArmazemId");

                            b1.ToTable("Armazens");

                            b1.WithOwner()
                                .HasForeignKey("ArmazemId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Armazens.ArmazemEndereco", "Endereco", b1 =>
                        {
                            b1.Property<string>("ArmazemId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("CodigoPostal")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("Localidade")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("Morada")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("ArmazemId");

                            b1.ToTable("Armazens");

                            b1.WithOwner()
                                .HasForeignKey("ArmazemId");
                        });

                    b.Navigation("Coordenadas");

                    b.Navigation("Designacao");

                    b.Navigation("Endereco");
                });

            modelBuilder.Entity("DDDSample1.Domain.Entregas.Entrega", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.Entregas.MassaKg", "massa", b1 =>
                        {
                            b1.Property<string>("EntregaId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<float>("massa")
                                .HasColumnType("real");

                            b1.HasKey("EntregaId");

                            b1.ToTable("Entrega");

                            b1.WithOwner()
                                .HasForeignKey("EntregaId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Entregas.TempoCargaMin", "tempocarga", b1 =>
                        {
                            b1.Property<string>("EntregaId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("tempocarga")
                                .HasColumnType("int");

                            b1.HasKey("EntregaId");

                            b1.ToTable("Entrega");

                            b1.WithOwner()
                                .HasForeignKey("EntregaId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Entregas.TempoDescargaMin", "tempodescarga", b1 =>
                        {
                            b1.Property<string>("EntregaId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("tempodescarga")
                                .HasColumnType("int");

                            b1.HasKey("EntregaId");

                            b1.ToTable("Entrega");

                            b1.WithOwner()
                                .HasForeignKey("EntregaId");
                        });

                    b.Navigation("massa");

                    b.Navigation("tempocarga");

                    b.Navigation("tempodescarga");
                });

            modelBuilder.Entity("DDDSample1.Domain.User.User", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.User.Email", "email", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("email")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.User.Password", "password", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("password")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.User.PhoneNumber", "phoneNumber", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("phoneNumber")
                                .HasColumnType("int");

                            b1.HasKey("UserId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.User.UserName", "userName", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("userName")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.User.UserType", "userType", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("userType")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("User");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.Navigation("email");

                    b.Navigation("password");

                    b.Navigation("phoneNumber");

                    b.Navigation("userName");

                    b.Navigation("userType");
                });
#pragma warning restore 612, 618
        }
    }
}
