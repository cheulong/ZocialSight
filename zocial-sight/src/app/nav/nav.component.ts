import { Component, OnInit } from '@angular/core';
import {TestService} from "./../test.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  result:any;
  private loading:boolean =false;
  constructor(private router: Router,private testService:TestService) { }

  ngOnInit() {
  }
refresh(){
  this.loading=true;
  console.log(this.loading);
  this.testService.update()
    .subscribe(res=>{
      this.result=res;
      this.loading=false;
      console.log(this.loading);
    })
  }
logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
  }
isLoggedIn(){
  let token=localStorage.getItem('token');
  if(!token)
    return false;
  return true;
}
register(){
  this.router.navigateByUrl('/register');
}
}
