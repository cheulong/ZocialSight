import { TestService } from "./../test.service";
import { Component, OnInit,OnChanges,DoCheck,SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit,OnChanges {
  users = [
    { name: "long", role: "a"  },
    { name: "b", role: "a"  },
    { name: "c", role: "b"  },
    { name: "d", role: "b"  },
  ];
  owners=[];
  staffs=[];
  constructor(private router: Router, private test: TestService) {}

  ngOnInit() {
    this.test.getUsers().subscribe(res => {
      console.log(res);
    });
    
    this.owners=this.findOwner(this.users);
    this.staffs=this.findStaff(this.users);
    this.users.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }
  ngOnChanges(changes: SimpleChanges){
    this.users;
    console.log('hi');

  }
  addUser() {
    this.router.navigateByUrl("/register");
  }
  remove(item) {
    // console.log(this.ownerList.name);
    if (confirm("Are you sure???")) {
      var index = this.users.indexOf(item);
    console.log(index);

      this.users.splice(index, 1);
      this.seperate();
      console.log('users',this.users.length);
      
    } else {
      console.log("Cancel");
    }
  }
  edit(item) {
    console.log(item.name);
    this.router.navigate(["/user", item.name]);
  }
  seperate(){
    this.owners=this.findOwner(this.users);
    this.staffs=this.findStaff(this.users);
  }
  findOwner(users){
    const owners=[];
    users.map(user=>{
      if(user.role=='a'){
        owners.push(user);
      }
    })
    console.log('owner',owners);
    
    return owners;
  }
  findStaff(users){
    const staffs=[];
    users.map(user=>{
      if(user.role=='b'){
        staffs.push(user);
      }
    })
    return staffs;
  }
}
