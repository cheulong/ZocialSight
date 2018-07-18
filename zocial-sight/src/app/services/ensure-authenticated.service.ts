import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class EnsureAuthenticatedService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      console.log('a');
      console.log(localStorage.getItem('statue'));
      
      if(localStorage.getItem('statue')===' Admin '){
        console.log('b');
        
        this.router.navigateByUrl('/register');
        return false;
      }else{
        return true;
      }
      
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
