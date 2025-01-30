using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Entregas{

    public class TempoCargaMin : IValueObject{

        public int tempocarga { get; private set; }

        public TempoCargaMin(int tempocarga){
            if(tempocarga <= 0) throw new BusinessRuleValidationException("Tempo de Carga nao pode ser nulo nem negativo");
            this.tempocarga = tempocarga;
        }
    }
}