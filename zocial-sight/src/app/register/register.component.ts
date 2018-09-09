import {Component} from "@angular/core";
import {AuthService} from "./../services/auth.service";
import {User} from "./../models/user";
import {Router} from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  username = "";
  user: User = new User();
  foods = [
    {value: "1", viewValue: "What is your favorite food?"},
    {value: "2", viewValue: "What is your favorite sport?"}
  ];
  roles = [
    {value: "1", viewValue: "Staff"},
    {value: "2", viewValue: "Product Owner"}
  ];
  selected = "1";
  selectedRole = "1";

  constructor(private router: Router, private auth: AuthService) {
    this.user.statue = " Product Owner ";
    this.user.question = " What is your favorite food? ";
  }

  onRegister(): void {
    // console.log('user',this.user);
    if (confirm("Are you sure to add new user?")) {
      this.auth
        .register(this.user)
        .then(user => {
          localStorage.setItem("token", user.access_token);
          this.router.navigateByUrl("/users");
        })
        .catch(err => {
          alert(err.error.message);
        });
    } else {
      console.log("Cancel");
    }
  }

  getGender(e) {
    console.log(e);

    this.user.question = e;
  }

  getRole(e) {
    console.log(e);

    this.user.statue = e;
  }
}
