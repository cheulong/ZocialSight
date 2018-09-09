import { TestService } from './../test.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-total-page-view',
  templateUrl: './total-page-view.component.html',
  styleUrls: ['./total-page-view.component.scss']
})
export class TotalPageViewComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
res;
  chartOptions = {
    responsive: true
  };

  chartData = [
    //{ data: [0, 0, 0, 0,2,2], label: 'Facebook' }
    // { data: [120, 455, 100, 340], label: 'Account B' },
    // { data: [45, 67, 800, 500], label: 'Account C' }
  ];
  chartData1=[
    {
      data:[2,1,2,1,2],
      label:'Page View',
    },
    {
      data:[1,2,1,2,1],label:'Revenue'
    }
  ]
  tempData = [];
  data = [];
  tempLabel = [];
  chartLabels = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.drawGraph(' 7days ');

  }
  drawGraph(value) {
    this.chartData = [];
    this.tempData = [];
    this.tempLabel = [];
    this.data = [];
    this.chartLabels = [];
    this.testService.getPageReact(value)
      .subscribe(res => {
this.res=res;
        if (this.res.length > 0) {
          for (let a in this.res) {
            this.tempLabel.push(res[a].created_time.slice(5, 10));
            this.tempData.push(res[a].total_reaction);
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
