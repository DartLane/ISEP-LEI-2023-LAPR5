using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Entregas{

    public class MassaKg : IValueObject{

        public float massa { get; private set; }

        public MassaKg(float massa){
            if(massa <= 0.0F) throw new BusinessRuleValidationException("A massa nao pode ser nula nem negativa");
            this.massa = massa;
        }
    }
}