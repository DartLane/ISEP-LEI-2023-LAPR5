using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemDesignacao : IValueObject
    {
        public string Designacao { get; private set; }

        public ArmazemDesignacao(string designacao)
        {
            ValidateDesignacao(designacao);
            Designacao = designacao;
        }

        private void ValidateDesignacao(string value)
        {
            if (string.IsNullOrEmpty(value)) throw new ArgumentNullException(nameof(value));
            if (value.Length > 50)
            {
                string errorMessage = String.Format("Designacao limite caracteres 50");
                throw new BusinessRuleValidationException(errorMessage);
            }
        }
    }
}