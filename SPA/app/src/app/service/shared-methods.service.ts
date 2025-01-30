import { Injectable } from '@angular/core';
import { User } from '../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class SharedMethodsService {

  constructor() { }

  validateUser(user: User): boolean {

    if (!user.phoneNumber) {
      alert('Obrigatório campo PhoneNumber!!');
      return false;
    }
    if (!user.email) {
      alert('Obrigatório campo Email!!');
      return false;
    }
    if (!user.firstName) {
      alert('Obrigatório campo firstName!!');
      return false;
    }
    if (!user.lastName) {
      alert('Obrigatório campo LastName!!');
      return false;
    }
    if (!user.userName) {
      alert('Obrigatório campo userName!!');
      return false;
    }
    if (!user.password) {
      alert('Obrigatório campo password!!');
      return false;
    }
    if (!user.userType) {
      alert('Obrigatório campo userType!!');
      return false;
    }

    // passar string para number
    var phonenumber1 = Number(user.phoneNumber);

    if (phonenumber1 < 100000000 || phonenumber1 > 999999999) {
      alert('O PhoneNumber é um numero com 9 digitos');
      return false;
    }
    return true;
  }
}
