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
  test: string = 'just a test';
  user: User = new User();
    constructor(private router: Router,private auth: AuthService) {}
    ngOnInit(){}
    onLogin(): void {

      this.auth.login(this.user)

      .then((user) => {
        localStorage.setItem('token', user.access_token);
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
    }
}
