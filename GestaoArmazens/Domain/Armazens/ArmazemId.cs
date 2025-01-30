using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Armazens
{
    public class ArmazemId : EntityId
    {
        public ArmazemId(String value) : base(value)
        {
            validateID(value);
        }

        private void validateID(String text) {
            if(String.IsNullOrEmpty(text) || text[0].Equals(' ')) {
                string errorMessage = String.Format("O id nao pode ser nulo ou começar com um espaço");
                throw new BusinessRuleValidationException(errorMessage);
            }
            if (text.Length != 3) {
                string errorMessage = String.Format("O id necessita ter 3 caracteres.");
                throw new BusinessRuleValidationException(errorMessage);
            }
        }

        override
        protected Object createFromString(String text)
        {
            return text;
        }

        override
        public String AsString()
        {
            return (String) base.Value;
        }
    }
}
