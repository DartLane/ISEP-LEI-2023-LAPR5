using System;
using Microsoft.AspNetCore.Mvc;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemDto
    {
        public String Id { get; set; }
        public string Designacao { get; set; }
        public string Morada { get; set; }
        public string Localidade { get; set; }
        public string CodigoPostal { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public float Altitude {get; set;}
        public bool Active { get; set; }

        public ArmazemDto(string id, string designacao, string morada, string localidade, string codigoPostal, float latitude, float longitude, float altitude, bool active){
            this.Id = id;
            this.Designacao = designacao;
            this.Morada = morada;
            this.Localidade = localidade;
            this.CodigoPostal = codigoPostal;
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Altitude = altitude;
            this.Active = active;
        }

        public static explicit operator ArmazemDto(ActionResult<ArmazemDto> v)
        {
            throw new NotImplementedException();
        }
    }

}