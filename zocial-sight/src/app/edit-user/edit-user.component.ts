import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TestService } from "../test.service";
import { Router } from '@angular/router';
@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  foods = [
    { value: '1', viewValue: 'What is your favorite food?' },
    { value: '2', viewValue: 'What is your favorite sport?' }
  ];
  roles = [
    { value: '1', viewValue: 'Staff' },
    { value: '2', viewValue: 'Product Owner' }
  ];
  selected;
  selectedRole;
  constructor(private router: Router,private activeRoute: ActivatedRoute, private test: TestService) {}
  routeParams = this.activeRoute.snapshot.params;
  user;
  ngOnInit() {
    this.test.getUser(this.routeParams.username).subscribe(res => {
      this.user = res;
      if(this.user.statue===" Staff ") this.selectedRole= '1';
      if(this.user.statue===" Product Owner ") this.selectedRole= '2';
      if(this.user.question===" What is your favorite food? ") this.selected= '1';
      if(this.user.question===" What is your favorite sport? ") this.selected= '2';
    });
    // this.user = this.users.find(user => user.username === this.routeParams.id);
    // do something with the parameters
    //  console.log(this.users.find(user => user.username === this.routeParams.id));
  }
  save() {
    console.log('user',this.user);
    this.test.saveUser(this.user).subscribe(res=>{
      this.router.navigateByUrl('/users');

    }
    )
  
  }
  getGender(e){
    console.log(e);
    
    this.user.question=e;
  }
  getRole(e){
    console.log(e);
    
    this.user.statue=e;
  }
  reset() {
    this.user = this.test.getUser("hi");
    console.log(this.user.name);
  }
  filterName: string;
}
