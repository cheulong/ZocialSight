import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TestService } from "../test.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  users = [{},
    {
      username: "long",
      name: "cheulong",
      surname: "sear",
      email: "searcheulong@gmail.com",
      password: "1234",
      phone: "1235",
      address: "sf",
      question: " What is your favorite sport? ",
      answer: "soccer",
      statue: "Staff"
    },{}
  ];
  constructor(private activeRoute: ActivatedRoute,private test:TestService) {}
  queryParams = this.activeRoute.snapshot.queryParams;
  routeParams = this.activeRoute.snapshot.params;
  user:any;
  ngOnInit() {
   this.user= this.test.getUser('hi');
   
  // this.user = this.users.find(user => user.username === this.routeParams.id);
    // do something with the parameters
  //  console.log(this.users.find(user => user.username === this.routeParams.id));
  }
  save(event){
    this.user.name=event.target.value;
    console.log(this.user.name);
    
  }
  reset(){

this.user =  this.test.getUser('hi');
    console.log(this.user.name);
    
  
  }
  filterName:string;
clear(){
// this.user.name = this.name;
}
}
