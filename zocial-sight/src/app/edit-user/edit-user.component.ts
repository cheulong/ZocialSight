import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TestService } from "../test.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  foods = [
    { value: "1", viewValue: "What is your favorite food?" },
    { value: "2", viewValue: "What is your favorite sport?" }
  ];
  roles = [
    { value: "1", viewValue: "Staff" },
    { value: "2", viewValue: "Product Owner" }
  ];
  selected;
  selectedRole;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) {}
  routeParams = this.activeRoute.snapshot.params;
  user;
  ngOnInit() {
    this.authService.getUser(this.routeParams.username).subscribe(res => {
      this.user = res;
      if (this.user.statue === " Staff ") this.selectedRole = "1";
      if (this.user.statue === " Product Owner ") this.selectedRole = "2";
      if (this.user.question === " What is your favorite food? ")
        this.selected = "1";
      if (this.user.question === " What is your favorite sport? ")
        this.selected = "2";
    });
   
  }
  updateUser(user){
    this.authService.updateUser(user).subscribe(res => {
      this.router.navigateByUrl("/users");
      return res;
    });
  }
  save() {

   this.updateUser(this.user)

  }
  getGender(e) {

    this.user.question = e;
  }
  getRole(e) {

    this.user.statue = e;
  }

  filterName: string;
}
