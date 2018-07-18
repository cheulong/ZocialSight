import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { User } from './../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();
  foods = [
    { value: '1', viewValue: 'What is your favorite food?' },
    { value: '2', viewValue: 'What is your favorite sport?' }
  ];
  roles = [
    { value: '1', viewValue: 'Company Staff' },
    { value: '2', viewValue: 'Product owner' }
  ];
  selected = '1';
  selectedRole = '1';
  constructor(private router: Router,private auth: AuthService) {
    this.user.statue=' Product Owner ';
    this.user.question=' What is your favorite food? ';
  }
  onRegister(): void {
    console.log('regist');
    
    localStorage.setItem('statue',this.user.statue);
    this.auth.register(this.user)
    .then((user) => {
      localStorage.setItem('token', user.access_token);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  }
  getGender(e){
    console.log(e);
    
    this.user.question=e;
  }
  getRole(e){
    console.log(e);
    
    this.user.statue=e;
  }
}
