import { TestService } from './../test.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.scss']
})
export class TotalRevenueComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
res;
  chartOptions = {
    responsive: true,
  legend: { display: false }

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
    this.testService.getTotalRevenue(value)
      .subscribe(res => {
        this.res=res;
        if (this.res.length > 0) {

          for (let a in this.res) {
            this.tempLabel.push(res[a].created_time.slice(5, 10));
            this.tempData.push(res[a].total_revenue);
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
