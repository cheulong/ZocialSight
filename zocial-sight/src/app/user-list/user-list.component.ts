import { TestService } from "./../test.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  owners;
  staffs;
  constructor(private router: Router, private test: TestService) {}

  ngOnInit() {
    this.test.getUsers().subscribe(res => {
      this.users=res;
      console.log('hi',this.users);
      
      this.seperate();
    });
  }
  addUser() {
    this.router.navigateByUrl("/register");
  }
  remove(item) {
    // console.log(this.ownerList.name);
    if (confirm("Are you sure???")) {
      var index = this.users.indexOf(item);
      this.users.splice(index, 1);
      this.seperate();
      console.log('item',item);
      this.test.deleteUser(item.username);
    } else {
      console.log("Cancel");
    }
  }
  edit(item) {
    console.log(item.username);
    this.router.navigate(["/user", item.username]);
  }
  seperate(){
    this.users.sort(function(a, b) {
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
    this.owners=this.findOwner(this.users);
    this.staffs=this.findStaff(this.users);
  }
  findOwner(users){
    const owners=[];
    users.map(user=>{
      if(user.statue==' Product Owner '){
        owners.push(user);
      }
    })
    console.log('owner',owners);
    
    return owners;
  }
  findStaff(users){
    const staffs=[];
    users.map(user=>{
      if(user.statue==' Staff '){
        staffs.push(user);
      }
    })
    return staffs;
  }
}
