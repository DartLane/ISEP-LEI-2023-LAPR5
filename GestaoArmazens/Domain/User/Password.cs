using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.User
{

    public class Password : IValueObject
    {

        public string password { get; private set; }

        public Password(string password)
        {
            if (password != null)
            {
                password = password.Trim();
                validatepassword(password);
            }
            this.password = password;
        }

        private void validatepassword(string password)
        {
            if (string.IsNullOrEmpty(password) || password.Length > 20)
            {
                throw new ArgumentNullException(nameof(password));
            }


        }
    }
}