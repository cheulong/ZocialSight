import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class EnsureAuthenticatedService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      
      if(localStorage.getItem('statue')===' Admin '){
        
        this.router.navigateByUrl('/users');
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
