import { TestService } from "./../test.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserService } from "../user.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  owners;
  staffs;
  constructor(private router: Router, private userService: UserService,private authService:AuthService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      this.seperate(this.users);
    });

    return this.users;
  }
  addUser() {
    this.router.navigateByUrl("/register");
  }
  remove(item) {
    let removedUser;

    if (confirm("Are you sure???")) {
      var index = this.users.indexOf(item);
      this.users.splice(index, 1);
      this.seperate(this.users);
      this.authService.deleteUser(item.username).subscribe(res => {
        removedUser = res;
      });
      return removedUser;
    } else {
      console.log("Cancel");
    }
    return removedUser;
  }
  edit(item) {
    this.router.navigate(["/user", item.username]);
  }
  seperate(users) {
    users.sort(function(a, b) {
      var x = a.firstname.toLowerCase();
      var y = b.firstname.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    this.owners = this.findOwner(users);
    this.staffs = this.findStaff(users);
  }
  findOwner(users) {
    const owners = [];
    users.map(user => {
      if (user.statue == " Product Owner ") {
        owners.push(user);
      }
    });
    console.log("owner", owners);

    return owners;
  }
  findStaff(users) {
    const staffs = [];
    users.map(user => {
      if (user.statue == " Staff ") {
        staffs.push(user);
      }
    });
    return staffs;
  }
}
