import { Component, OnInit } from '@angular/core';
import {TestService} from "./../test.service";
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  foods = [
    { value: '1day', viewValue: '1day' },
    { value: '3days', viewValue: '3days' },
    { value: '7days', viewValue: '7days' },
    { value: '30days', viewValue: '30days' }
  ];
     selected = '7days';
     male=0;
     female=0;
     temp:any;
  constructor(private testService:TestService) { }

  ngOnInit() {
    this.getGender(' 7days ')
  }
  getGender(date){
      this.testService.getGender(date)
      .subscribe(res=>{
        this.temp=res;
        if(this.temp['female']+this.temp['male']!=0){
        this.male=(this.temp['male']/(this.temp['female']+this.temp['male']))*100;
        this.female=100-this.male;
        }
       })
  }
}
