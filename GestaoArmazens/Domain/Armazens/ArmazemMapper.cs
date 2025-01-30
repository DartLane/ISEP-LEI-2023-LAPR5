using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemMapper
    {
        public static ArmazemDto ToDto(CreatingArmazemDTO obj)
        {
            return new ArmazemDto(obj.Id, obj.Designacao, obj.Morada, obj.Localidade, obj.CodigoPostal, obj.Latitude, obj.Longitude, obj.Altitude, obj.Active);
        }
        public static ArmazemDto ToDto(Armazem obj)
        {
            return new ArmazemDto(obj.Id.AsString(), obj.Designacao.Designacao, obj.Endereco.Morada, obj.Endereco.Localidade, obj.Endereco.CodigoPostal, obj.Coordenadas.Latitude, obj.Coordenadas.Longitude, obj.Coordenadas.Altitude, obj.Active);
        }

        public static InibirArmazemDTO ToDtoInibir(Armazem obj)
        {
            return new InibirArmazemDTO(obj.Id.AsString(), obj.Designacao.Designacao, obj.Endereco.Morada, obj.Endereco.Localidade, obj.Endereco.CodigoPostal, obj.Coordenadas.Latitude, obj.Coordenadas.Longitude, obj.Coordenadas.Altitude, obj.Active);
        }

        public static Armazem ToDomain(ArmazemDto dto)
        {
            return new Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);
        }

        public static Armazem ToDomain(CreatingArmazemDTO dto)
        {
            return new Armazem(dto.Id, dto.Designacao, dto.Morada, dto.Localidade, dto.CodigoPostal, dto.Latitude, dto.Longitude, dto.Altitude);
        }
    }
}