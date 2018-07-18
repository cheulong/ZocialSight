import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from "./../test.service";
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-analysis-result',
  templateUrl: './analysis-result.component.html',
  styleUrls: ['./analysis-result.component.scss']
})
export class AnalysisResultComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  foods = [
    { value: '1day', viewValue: '1day' },
    { value: '3days', viewValue: '3days' },
    { value: '7days', viewValue: '7days' },
    { value: '30days', viewValue: '30days' }
  ];
  selected = '7days';
  chartOptions = {
    responsive: true
  };

  chartData = [
    //{ data: [0, 0, 0, 0,2,2], label: 'Facebook' }
    // { data: [120, 455, 100, 340], label: 'Account B' },
    // { data: [45, 67, 800, 500], label: 'Account C' }
  ];
  tempData = [];
  data = [];
  tempLabel = [];
  chartLabels = [];
  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.drawGraph(' 7days ');
  }
  drawGraph(value) {
    this.chartData = [];
    this.tempData = [];
    this.tempLabel = [];
    this.data = [];
    this.chartLabels = [];
    this.testService.getFBData(value)
      .subscribe(res => {

        if (Object.keys(res).length > 0) {
          for (let a in res) {
            this.tempLabel.push(res[a].created_time.slice(5, 10));
            this.tempData.push(res[a].comments.length);
            this.data = this.tempData;
            this.chartLabels = this.tempLabel;

          }
        } else {
          this.data = [];
          this.chartLabels = [];
        }
        this.chartLabels.reverse();
        this.chartData.push({ data: this.data.reverse(), label: 'Facebook' });
        this.chart.chart.update();
      });
  }
}
