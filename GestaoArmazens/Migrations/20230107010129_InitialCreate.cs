using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DDDNetCore.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "ddd");

            migrationBuilder.CreateTable(
                name: "Armazens",
                schema: "ddd",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Designacao_Designacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco_Morada = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco_Localidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco_CodigoPostal = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Coordenadas_Latitude = table.Column<float>(type: "real", nullable: true),
                    Coordenadas_Longitude = table.Column<float>(type: "real", nullable: true),
                    Coordenadas_Altitude = table.Column<float>(type: "real", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armazens", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Entrega",
                schema: "ddd",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    tempodescarga_tempodescarga = table.Column<int>(type: "int", nullable: true),
                    tempocarga_tempocarga = table.Column<int>(type: "int", nullable: true),
                    data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    massa_massa = table.Column<float>(type: "real", nullable: true),
                    armazemId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrega", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trucks",
                schema: "ddd",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    length = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trucks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                schema: "ddd",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    phoneNumber_phoneNumber = table.Column<int>(type: "int", nullable: true),
                    email_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    firstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password_password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userName_userName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userType_userType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Armazens",
                schema: "ddd");

            migrationBuilder.DropTable(
                name: "Entrega",
                schema: "ddd");

            migrationBuilder.DropTable(
                name: "Trucks",
                schema: "ddd");

            migrationBuilder.DropTable(
                name: "User",
                schema: "ddd");
        }
    }
}
