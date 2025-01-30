using System;


namespace DDDSample1.Domain.User
{
    public class UserDTO
    {
        public Guid Id { get; set; }
        public int? phoneNumber {get; private set;}
        public string email {get; private set;}

        public string firstName {get; private set;}
        public string lastName {get; private set;}
        public string password {get; private set;}
        public string userName {get; private set;}
        public string userType {get; private set;}

        public UserDTO(Guid id, int? phoneNumber,string email, string firstName, string lastName, string password, string userName , string userType)
        {
            this.Id = id;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.password= password;
            this.userName = userName;
            this.userType = userType;
        }

    }
}