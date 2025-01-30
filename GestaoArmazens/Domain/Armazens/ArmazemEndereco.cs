using System;
using System.Text.RegularExpressions;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemEndereco : IValueObject
    {
        public string Morada { get; private set; }
        public string Localidade { get; private set; }
        public string CodigoPostal { get; private set; }

        public ArmazemEndereco(string morada, string localidade, string codigoPostal)
        {
            ValidateMorada(morada);
            ValidateLocalidade(localidade);
            ValidateCodigoPostal(codigoPostal);
            
            this.Morada = morada;
            this.Localidade = localidade;
            this.CodigoPostal = codigoPostal;
        }

        private void ValidateMorada(string morada)
        {
            if (string.IsNullOrEmpty(morada)) throw new ArgumentNullException(nameof(morada));
        }

        private void ValidateLocalidade(string localidade)
        {
            if (string.IsNullOrEmpty(localidade)) throw new ArgumentNullException(nameof(localidade));
        }

        private void ValidateCodigoPostal(string codigoPostal)
        {
            if (string.IsNullOrEmpty(codigoPostal)) throw new ArgumentNullException(nameof(codigoPostal));
            Regex r = new Regex(@"^\d{4}(-\d{3})$");
            if (!r.IsMatch(codigoPostal))
            {
                string errorMessage = String.Format("Codigo postal invalido");
                throw new BusinessRuleValidationException(errorMessage);
            }
        }
    }
}