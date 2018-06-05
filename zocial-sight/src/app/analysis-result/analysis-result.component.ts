import { Component, OnInit } from '@angular/core';
import {TestService} from "./../test.service";

@Component({
  selector: 'app-analysis-result',
  templateUrl: './analysis-result.component.html',
  styleUrls: ['./analysis-result.component.scss']
})
export class AnalysisResultComponent implements OnInit {


  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  chartOptions = {
  responsive: true
};

chartData = [
  //{ data: [0, 0, 0, 0,2,2], label: 'Facebook' }
  // { data: [120, 455, 100, 340], label: 'Account B' },
  // { data: [45, 67, 800, 500], label: 'Account C' }
];
tempData=[];
data=[];
tempLabel=[];
chartLabels = [];
  constructor(private testService:TestService) {

  }

  ngOnInit() {
    // this.testService.getFBData()
    // .subscribe(res=>{
    //
    //   for(let a in res){
    //
    //       this.tempLabel.push(res[a].created_time.slice(5,10));
    //       this.tempData.push(res[a].comments.length);
    //       this.data=this.tempData;
    //       this.chartLabels=this.tempLabel;
    //   }
    //   this.chartLabels.reverse();
    //   this.chartData.push({data:this.data.reverse(),label: 'Facebook'});
    //  })
  }
  onChartClick(event) {
      console.log(event);
    }
  }
