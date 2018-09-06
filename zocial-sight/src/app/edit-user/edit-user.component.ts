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
  constructor(private router: Router,private activeRoute: ActivatedRoute, private test: TestService) {}
  routeParams = this.activeRoute.snapshot.params;
  user;
  ngOnInit() {
    this.test.getUser(this.routeParams.username).subscribe(res => {
      this.user = res;
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
  reset() {
    this.user = this.test.getUser("hi");
    console.log(this.user.name);
  }
  filterName: string;
}
