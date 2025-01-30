using System;


namespace DDDSample1.Domain.Entregas
{
    public class EntregaDto
    {
        public Guid Id { get; set; }

        public int Tempodescarga { get; set; }

        public int Tempocarga { get; set; }
        
        public int Dia { get; set; }

        public int Mes { get; set; }

        public int Ano { get; set; }

        public float Massa { get; set; }

        public String ArmazemId { get; set; }

        public EntregaDto(Guid id,int tempodescarga, int tempocarga,int dia,int mes,int ano,float massa, String armazemId)
        {
            this.Id = id;
            this.Tempodescarga = tempodescarga;
            this.Tempocarga = tempocarga;
            this.Dia = dia;
            this.Mes= mes;
            this.Ano=ano;
            this.Massa = massa;
            this.ArmazemId = armazemId;
            
        }

    }
}