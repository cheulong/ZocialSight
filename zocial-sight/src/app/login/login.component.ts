import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = ' ';
  errorMessageInReset:string=' ';
  user: User = new User();
  isReset=false;
  isReseted=false;
  confirmPassword:string='';
    constructor(private router: Router,private auth: AuthService) {
      this.user.username='';
      this.user.password='';
      this.user.email='';
    }
    ngOnInit(){}
    onLogin(): void {

      this.auth.login(this.user)

      .then((user) => {
        localStorage.setItem('token', user.access_token);
        this.router.navigateByUrl('/dashboard');

      })
      .catch((err) => {

        this.errorMessage=err.error.message;

      });
    }



    resetPassword(){
      if(this.user.password!==this.confirmPassword){
        this.errorMessageInReset='The confirm new password and new password is not match, Please try again';
      }else{
      this.auth.reset(this.user)
      .then((user) => {
        this.user.username='';
        this.user.password='';
        this.user.email='';
          this.isReseted=true;
          this.errorMessageInReset=user.message;
      })
      .catch((err) => {
        this.errorMessageInReset=err.error.message;
      });
      }
    }

}
