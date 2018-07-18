import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { log } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = ' ';
  errorMessageInReset:string=' ';
  user: User=new User();
  isReset=false;
  isReseted=false;
  confirmPassword:string='';
  foods = [
    { value: '1', viewValue: 'What is your favorite food?' },
    { value: '2', viewValue: 'What is your favorite sport?' }
  ];
     selected = '1';
    constructor(private router: Router,private auth: AuthService) {
      this.user.username='';
      this.user.password='';
      this.user.email='';
      this.user.question=' What is your favorite food? ';
    }
    ngOnInit(){}
    onLogin(): void {
console.log(this.user);

      this.auth.login(this.user)

      .then((user) => {
        localStorage.setItem('statue', user.statue);
        localStorage.setItem('token', user.access_token);
        this.router.navigateByUrl('/dashboard');

      })
      .catch((err) => {
        if(this.user.username.length>30){
          this.errorMessage="The maximum length is 30";
        }
        if(this.user.password.length>30){
          this.errorMessage="The maximum length is 30";
        }
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
getGender(e){
  this.user.question=e;
}

}
