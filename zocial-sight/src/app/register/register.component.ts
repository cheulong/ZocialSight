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
  constructor(private router: Router,private auth: AuthService) {}
  onRegister(): void {
    this.auth.register(this.user)
    .then((user) => {
      localStorage.setItem('token', user.access_token);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
