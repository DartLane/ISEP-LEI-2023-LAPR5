using System;
using DDDSample1.Domain.Shared;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemAltitude : IValueObject
    {
        public int Altitude { get; private set; }
    

        public ArmazemAltitude(int altitude)
        {
            ValidateAltitude(altitude);
            this.Altitude = altitude;
    
        }

        private void ValidateAltitude(int altitude) {
            if(altitude < ArmazemConstantes.MinAltitude) {
                string errorMessage = String.Format("Altitude fora dos limites");
                throw new BusinessRuleValidationException(errorMessage);
            }
        }
    }
}