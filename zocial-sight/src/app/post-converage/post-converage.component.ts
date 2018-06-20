import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {TestService} from "./../test.service";
@Component({
  selector: 'app-post-converage',
  templateUrl: './post-converage.component.html',
  styleUrls: ['./post-converage.component.scss']
})
export class PostConverageComponent implements OnInit {
 @ViewChild(BaseChartDirective) chart: BaseChartDirective;
 foods = [
   { value: '1day', viewValue: '1day' },
   { value: '3days', viewValue: '3days' },
   { value: '7days', viewValue: '7days' },
   { value: '30days', viewValue: '30days' }
 ];
    selected = '7days';
  chartOptions = {

  responsive: false,
  layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
legend: { display: false }
};

chartData = [
   {
             label: '# of Votes',
             data:[,],
            backgroundColor: [
                'rgba(60, 90, 153, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(60, 90, 153,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
             borderWidth: 1
         }
      ];


chartLabels = ['Facebook','Twitter','Pantip'];
tempPost:any=0;
facebook:any;
twitter:any;
pantip:any;
  constructor(private testService:TestService) { }

  ngOnInit() {
    this.someMethod(' 7days ')
  }

someMethod(date){

  this.testService.getFBData(date)
  .subscribe(res=>{
    this.facebook=res.length;
    this.chartData[0].data[0]=res.length;
   })
   this.testService.getTWData(date)
   .subscribe(res=>{
     this.twitter=res.length;
     this.chartData[0].data[1]=res.length;
    })
    this.testService.getPantip(date)
    .subscribe(res=>{
      this.pantip=res.length;
      this.chartData[0].data[2]=res.length;
      this.chart.chart.update();
     })
}

  onChartClick(event) {
      console.log(event);
    }
}
