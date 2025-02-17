using System;
using DDDSample1.Domain.Shared;
using System.Text.RegularExpressions;

namespace DDDSample1.Domain.User
{

    public class Email : IValueObject
    {

        public string email { get; private set; }

        public Email(string email)
        {
            if (email != null)
            {
                email = email.Trim();
                validateEmail(email);
            }
            this.email = email;
        }

        private void validateEmail(string email)
        {
            if (email.Length < 1)
            {
                throw new ArgumentNullException(nameof(email));
            }

        }
    }
}