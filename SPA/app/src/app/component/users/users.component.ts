import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private location: Location) {}

  users: User[] = [];
  selectedUser!: User;
    
  ngOnInit(): void {
    this.listarUsersExistentes();
  }

  onSelect(user: User):void{
    if(this.selectedUser == user){
      //fecha o detalhe
      this.selectedUser = {} as User;
      //vai buscar id caminho ao html e fecha o detalhe
      document.getElementById("detalheUser")!.style.display = "none";
    }else{
      this.selectedUser = user;
      //vai buscar id caminho ao html e abre o detalhe
      document.getElementById("detalheUser")!.style.display = "block";
    }
    //this.selectedEntrega = entrega;
  }

  criarUser(phonenumber: string, email: string, firstName: string, lastName: string, userName: string, password: string, userType: string): void{
    
    if(!phonenumber){
      alert('Obrigatório campo PhoneNumber!!');
      return;
    }
    if(!email){
      alert('Obrigatório campo Email!!');
      return;
    }
    if(!firstName){
      alert('Obrigatório campo firstName!!');
      return;
    }
    if(!lastName){
      alert('Obrigatório campo LastName!!');
      return;
    }
    if(!userName){
      alert('Obrigatório campo userName!!');
      return;
    }
    if(!password){
      alert('Obrigatório campo password!!');
      return;
    }
    if(!userType){
      alert('Obrigatório campo userType!!');
      return;
    }

    // passar string para number
    var phonenumber1 = Number(phonenumber);

    if( phonenumber1 < 100000000 || phonenumber1 >999999999){
      alert('O PhoneNumber é um numero com 9 digitos');
      return;
    }
    
    this.userService.criarUser({phoneNumber:phonenumber1, email:email, firstName:firstName, lastName, userName:userName, password:password, userType:userType} as User).subscribe((data) => {
      if(data){
        alert('User adicionado!');
      }else{
        alert('Erro! Tente novamente.');
      }
      window.location.reload();
      },
      (error) => {
        if (error.status >= 400) {
          alert('Erro! Tente novamente.');
        }
        window.location.reload();
      },
      
      
    );  
  }

  listarUsersExistentes(): void{
    this.userService.getUsersExistentes().subscribe(
      (users) => (this.users = users))
  }

  deleteUser(user: User): void{
    this.userService.deleteUser(user.id)
    .subscribe();
    alert('User com phone: ' + user.phoneNumber + ' foi eliminado!');
    window.location.reload();
  }

  goBack(): void {
    this.location.back() }

}
