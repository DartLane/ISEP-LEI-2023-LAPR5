import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { UserService } from 'src/app/service/user.service';
import { SharedMethodsService } from 'src/app/service/shared-methods.service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private sharedMethods: SharedMethodsService,
    private location: Location) { }

  ngOnInit(): void {
    //this.getEntrega();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(
      user => user = user
    );
    alert(this.user);
  }

  saveUser(): void {
    if (this.user) {

      if (this.sharedMethods.validateUser(this.user)) {

        this.userService.updateUser(this.user).subscribe();
        alert('User editada ' + this.user.phoneNumber);

      } else {
        alert('Não é possivel editar o utilizador' + this.user);
      }
    }
    window.location.reload();
  }

  anonimizarUser(): void {
    this.userService.anonimizeUser(this.user!.id)
      .subscribe();
    alert('User com phone: ' + this.user!.phoneNumber + ' foi anonimizado!');
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }


}
