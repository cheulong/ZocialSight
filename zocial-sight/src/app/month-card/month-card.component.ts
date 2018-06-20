import { Component, OnInit } from '@angular/core';
import {TestService} from "./../test.service";

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.scss']
})
export class MonthCardComponent implements OnInit {
public now: Date = new Date();
   data:any;
   commentNum=0;
   likeNum=0;
   shareNum=0;
   retweetNum=0;
   favoriteNum=0;

   foods = [
     { value: '1day', viewValue: '1day' },
     { value: '3days', viewValue: '3days' },
     { value: '7days', viewValue: '7days' },
     { value: '30days', viewValue: '30days' }
   ];
   foods2 = [
     { value: '1day', viewValue: '1day' },
     { value: '3days', viewValue: '3days' },
     { value: '7days', viewValue: '7days' },
     { value: '30days', viewValue: '30days' }
   ];
   // foods3 = [
   //   { value: '1days', viewValue: '1days' },
   //   { value: '3daysdsd', viewValue: '3dayssfdss' },
   //   { value: '7days', viewValue: '7days' },
   //   { value: '30days', viewValue: '30days' }
   // ];
   selected = '7days';
   selected2= '7days';
// selected3 = '1days';
  constructor(private testService:TestService) {


  }

  ngOnInit() {
    this.someMethod(' 7days ');
    this.changeTwDate(' 7days ');
  }
  someMethod(value){
    let now: Date = new Date();
        this.testService.getFBData(value)
        .subscribe(res=>{
          console.log(res);
          this.likeNum=0;
          this.commentNum=0;
          this.shareNum=0;
          for(let a in res){
              this.likeNum+=res[a].engagement[0].Like;
              this.commentNum+=res[a].comments.length;
              this.shareNum+=res[a].engagement[6].Share;
          }
         })

  }
  changeTwDate(value){
    this.testService.getTWData(value)
    .subscribe(res=>{
      console.log(res);
      this.favoriteNum=0;
      this.retweetNum=0;
      for(let a in res){
          this.favoriteNum+=res[a].favorite_count;
          this.retweetNum+=res[a].retweet_count;

      }
     })
  }
}
