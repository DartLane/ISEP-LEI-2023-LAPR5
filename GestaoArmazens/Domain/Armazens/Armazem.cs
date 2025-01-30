using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Armazens
{
    public class Armazem : Entity<ArmazemId>, IAggregateRoot
    {
        public ArmazemDesignacao Designacao { get; private set; }
        public ArmazemEndereco Endereco { get; private set; }
        public ArmazemCoordenadas Coordenadas { get; private set; }
        public bool Active { get; private set; }

        private Armazem()
        {
            this.Active = true;
        }

        public Armazem(string codigoID, string designacao, string morada, string localidade, string codigoPostal, float latitude, float longitude, float altitude) 
        {
            if (designacao == null) throw new BusinessRuleValidationException("Um armazém tem que ter sempre um nome associado.");
            this.Id = new ArmazemId(codigoID);
            this.Designacao = new ArmazemDesignacao(designacao);
            this.Endereco = new ArmazemEndereco(morada, localidade, codigoPostal);
            this.Coordenadas = new ArmazemCoordenadas(latitude, longitude, altitude);
            this.Active = true;
        }


        public void AlterarCoordenadas(float latitude, float longitude, float altitude)
        {
            this.Coordenadas= new ArmazemCoordenadas(latitude,longitude, altitude);
        }

        public void AlterarEndereco(string morada, string localidade, string codigoPostal)
        {
            this.Endereco = new ArmazemEndereco(morada,localidade,codigoPostal);
        }
        public void AlterarNome(string designacao)
        {
            this.Designacao = new ArmazemDesignacao(designacao);
        }
        public void Inibir() {
            this.Active = false;
        }
        public void Desinibir() {
            this.Active = true;
        }

    }
}