import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './service/user.service';
import { User } from './model/user/user';
import { NavigationComponent } from './navigation/navigation.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'EletricGo';

  constructor(private userService: UserService,private authService: SocialAuthService) { }

  userApp: any
  user: any;
  loggedIn: any;
  token: any;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.userService.getUserByEmail(user.email).subscribe(user1=>{this.userApp = user1});
      this.userService.getToken(user.email).subscribe(token1=>{this.token = token1});
      localStorage.setItem('userEmail',JSON.stringify(this.userApp.email));
      localStorage.setItem('userType',JSON.stringify(this.userApp.userType));
      localStorage.setItem('token',this.token.token);
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  CheckIfLog():boolean{
    if(localStorage.getItem('token') === null){
      return true;
    }
    this.loggedIn = true;
    return false;
  }
}
