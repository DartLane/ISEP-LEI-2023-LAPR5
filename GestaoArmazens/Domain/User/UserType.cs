using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.User{

    public class UserType : IValueObject{

        public string userType { get; private set; }

        public UserType(string userType){
            validateuserType(userType);
            this.userType = userType;
        }

        private void validateuserType(string userType){
            List<string> tipos = new List<string> {"admin","gestor Armazens","gestor Frota","gestor Logistica"};
            if(string.IsNullOrEmpty(userType) || !tipos.Contains(userType)){
                throw new ArgumentNullException(nameof(userType));
            }
            

        }
    }
}