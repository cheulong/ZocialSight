import { Component, OnInit } from '@angular/core';
import {TestService} from "./../test.service";
@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.scss']
})
export class MonthCardComponent implements OnInit {
   data:any;
   commentNum=0;
   likeNum=0;
   shareNum=0;
  constructor(private testService:TestService) {


  }

  ngOnInit() {
    this.testService.getFBData()
    .subscribe(res=>{

      for(let a in res){
          this.likeNum+=res[a].engagement[0].Like;
          this.commentNum+=res[a].comments.length;
          this.shareNum+=res[a].engagement[6].Share;
      }
     })
  }
getData(){


}
}
