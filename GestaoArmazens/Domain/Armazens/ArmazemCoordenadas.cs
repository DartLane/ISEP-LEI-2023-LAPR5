using System;
using DDDSample1.Domain.Shared;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Domain.Armazens
{
    //[Keyless]
    public class ArmazemCoordenadas : IValueObject
    {
        public float Latitude { get; private set; }
        public float Longitude { get; private set; }
        public float Altitude { get; private set; }

        public ArmazemCoordenadas(float latitude, float longitude, float altitude)
        {
            ValidateCoordenadas(latitude, longitude, altitude);
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Altitude = altitude;
        }

        private void ValidateCoordenadas(float latitude, float longitude, float altitude) {
            if(latitude < ArmazemConstantes.MinLatitudeWGS84 || latitude > ArmazemConstantes.MaxLatitudeWGS84) {
                string errorMessage = String.Format("Latitude fora dos limites");
                throw new BusinessRuleValidationException(errorMessage);
            }
            if(longitude < ArmazemConstantes.MinLongitudeWGS84 || longitude > ArmazemConstantes.MaxLongitudeWGS84) {
                string errorMessage = String.Format("Longitude fora dos limites");
                throw new BusinessRuleValidationException(errorMessage);
            }
            if(altitude < ArmazemConstantes.MinAltitude || altitude > ArmazemConstantes.MaxAltitude) {
                string errorMessage = String.Format("Altitude fora dos limites");
                throw new BusinessRuleValidationException(errorMessage);
            }
        }
    }
}