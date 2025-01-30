using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Entregas{

    public class TempoDescargaMin : IValueObject{

        public int tempodescarga { get; private set; }

        public TempoDescargaMin(int tempodescarga){
            if(tempodescarga <= 0) throw new BusinessRuleValidationException("Tempo de Descarga nao pode ser nulo nem negativo");
            this.tempodescarga = tempodescarga;
        }
    }
}