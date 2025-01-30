using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.User
{
    public class User : Entity<UserId>, IAggregateRoot
    {

        public PhoneNumber phoneNumber {get; private set;}
        public Email email {get; private set;}
        public string firstName {get; private set;}
        public string lastName {get; private set;}
        public Password password {get; private set;}
        public UserName userName {get; private set;}
        public UserType userType {get; private set;}

        private User()
        {
        }

        public User(int? phoneNumber,string email, string firstName, string lastName, string password, string userName , string userType)
        {
            this.Id = new UserId(Guid.NewGuid());
            //validatePhoneNumber(phoneNumber);
            this.phoneNumber = new PhoneNumber(phoneNumber);
            //this.Id = new UserId(phoneNumberString);
            this.email = new Email(email);
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = new Password(password);
            this.userName = new UserName(userName);
            this.userType = new UserType(userType);

        }

        public void AlterarPhoneNumber(int? phoneNumber) {
            this.phoneNumber = new PhoneNumber(phoneNumber);
        }

        public void AlterarEmail(string email) {
            this.email = new Email(email);
        }

        public void AlterarFirstName(string firstName) {
            this.firstName = firstName;
        }

        public void AlterarLastName(string lastName) {
            this.lastName = lastName;
        }

        public void AlterarPassword(string password) {
            this.password = new Password(password);
        }

        public void AlterarUserName(string username) {
            this.userName = new UserName(username);
        }

        public void AlterarUserType(string userType) {
            this.userType = new UserType(userType);
        }


        /*private void validatePhoneNumber(long phoneNumber){
            if(phoneNumber < 100000000 && phoneNumber > 999999999){
                throw new ArgumentNullException(nameof(phoneNumber));
            }
        }*/
    }
}