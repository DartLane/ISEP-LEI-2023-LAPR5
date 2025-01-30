import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  user:any
  condicao!:boolean

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private location: Location) {}

  checkUserLogistica():Boolean{
    var type =localStorage.getItem('userType');
    if(type === "\"admin\"" || type==="\"gestor Logistica\""){
      return true;
    }
    return false;
  }

  checkUserArmazens():Boolean{
    var type =localStorage.getItem('userType');
    if(type === "\"admin\"" || type==="\"gestor Armazens\""){
      this.condicao = true;
      return true;
    }
    return false;
  }

  checkUserFrota():Boolean{
    var type =localStorage.getItem('userType');
    if(type === "\"admin\"" || type ==="\"gestor Frota\""){
      return true;
    }
    return false;
  }

  checkUserAdmin():Boolean{
    var type =localStorage.getItem('userType');
    if(type === "\"admin\""){
      return true;
    }
    return false;
  }

  LogOut(){
    localStorage.clear();
    window.location.reload();
  }


}
