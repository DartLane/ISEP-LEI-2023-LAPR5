import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SocialAuthService } from '@abacritt/angularx-social-login';

import { UserService } from 'src/app/service/user.service';
import { SharedMethodsService } from 'src/app/service/shared-methods.service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService,
    private sharedMethods: SharedMethodsService,
    private authService: SocialAuthService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    let email = localStorage.getItem('userEmail')!;
    const length = email.length;
    email = email.substring(1,length-1);
    this.userService.getUserByEmail(email)
      .subscribe(user => this.user = user);
  }

  updateUser(): void {
    if (this.user)
      if (this.sharedMethods.validateUser(this.user)) {

        this.userService.updateUser(this.user).subscribe(() => {
          alert('Perfil editado');
        });

        window.location.reload();
      }
  }

  anonimizar(): void {
    this.userService.anonimizeUser(this.user!.id)
      .subscribe(() => {
        alert('Perfil anonimizado. Signing out');
        localStorage.clear();
        window.location.reload();
      });
  }

}
