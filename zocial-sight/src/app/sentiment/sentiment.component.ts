import { Component, OnInit,ViewChild } from '@angular/core';
import {TestService} from "./../test.service";
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {
 @ViewChild(BaseChartDirective) chart: BaseChartDirective;

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
  { data: [,], label: 'Account A' },

  ];

chartLabels = ['Positive','Negative'];
  
  pos=0;
     neg=0;
     temp:any;
     foods = [
      { value: '1day', viewValue: '1day' },
      { value: '3days', viewValue: '3days' },
      { value: '7days', viewValue: '7days' },
      { value: '30days', viewValue: '30days' }
    ];
       selected = '7days';
  constructor(private testService:TestService) { }


  ngOnInit() {
    this.changeDate(' 7days ')

  }
changeDate(date){
   this.testService.getSentiment(date)
  .subscribe(res=>{
  this.temp=res;
        if(this.temp['neg']+this.temp['pos']!=0){
        this.pos=Math.round((this.temp['pos']/(this.temp['neg']+this.temp['neg']))*100);
        this.neg=100-this.pos;
        this.chartData[0].data[0]=this.pos;
        this.chartData[0].data[1]=this.neg;
      this.chart.chart.update();
  }

})
}}
