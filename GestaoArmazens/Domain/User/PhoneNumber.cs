using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.User{

    public class PhoneNumber : IValueObject{

        public int? phoneNumber { get; private set; }

        public PhoneNumber(int? phoneNumber){
            if(phoneNumber!=null)    validatePhoneNumber(phoneNumber);
            this.phoneNumber = phoneNumber;
        }

        private void validatePhoneNumber(int? phoneNumber){
            if(phoneNumber < 100000000 || phoneNumber > 999999999){
                throw new ArgumentNullException(nameof(phoneNumber));
            }
        }
    }
}