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
  { data: [0, 0, 0, 0,2,2], label: 'Facebook' }
  // { data: [120, 455, 100, 340], label: 'Account B' },
  // { data: [45, 67, 800, 500], label: 'Account C' }
];

chartLabels = ['26','26','27', '28', '29', '30'];
  constructor(private testService:TestService) {

  }

  ngOnInit() {
    this.testService.getFBData()
    .subscribe(res=>{

      for(let a in res){
          console.log(res[a].created_time);

      }
     })
  }
  onChartClick(event) {
      console.log(event);
    }
  }
