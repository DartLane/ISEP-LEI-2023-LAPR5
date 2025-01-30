using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Entregas
{
    public class Entrega : Entity<EntregaId>, IAggregateRoot
    {
        public TempoDescargaMin tempodescarga { get; private set; }

        public TempoCargaMin tempocarga { get; private set; }
        public DateTime data{ get; private set; }

        public MassaKg massa {get; private set;}

        public String armazemId {get; private set;}

        private Entrega()
        {
        }

        public Entrega(int tempodescarga , int tempocarga, int dia , int mes, int ano,float massa, string armazemId)
        {
            Guid g = Guid.NewGuid();
            this.Id = new EntregaId(g);
            this.tempodescarga = new TempoDescargaMin(tempodescarga);
            this.tempocarga = new TempoCargaMin(tempocarga);
            this.data = new DateTime(ano,mes,dia);
            this.massa = new MassaKg(massa);
            this.armazemId = armazemId;
        }

        public void ChangeTempoDescargaMin(int tempodescarga)
        {
            this.tempodescarga = new TempoDescargaMin(tempodescarga);
        }

        public void ChangeTempoCargaMin(int tempocarga)
        {
            this.tempocarga = new TempoCargaMin(tempocarga);
        }

        public void ChangeMassaKg(float massa)
        {
            this.massa = new MassaKg(massa);
        }

        public void ChangeData(int dia,int mes,int ano)
        {
            this.data = new DateTime(ano,mes,dia);
        }

        public void ChangeArmazemId(string armazemId)
        {
            this.armazemId = armazemId;
        } 

    
    }
}