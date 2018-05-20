import { Component, OnInit } from '@angular/core';


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
  { data: [330, 600, 260, 700], label: 'Account A' },
  { data: [120, 455, 100, 340], label: 'Account B' },
  { data: [45, 67, 800, 500], label: 'Account C' }
];

chartLabels = ['January', 'February', 'Mars', 'April'];
  constructor() {

  }

  ngOnInit() {
  }
  onChartClick(event) {
      console.log(event);
    }
  }
