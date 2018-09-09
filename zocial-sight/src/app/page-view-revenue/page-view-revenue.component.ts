import { TestService } from "./../test.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseChartDirective } from "ng2-charts/ng2-charts";

@Component({
  selector: "app-page-view-revenue",
  templateUrl: "./page-view-revenue.component.html",
  styleUrls: ["./page-view-revenue.component.scss"]
})
export class PageViewRevenueComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective;

  chartOptions = {
    responsive: true
  };

  chartData = [
    //{ data: [0, 0, 0, 0,2,2], label: 'Facebook' }
    // { data: [120, 455, 100, 340], label: 'Account B' },
    // { data: [45, 67, 800, 500], label: 'Account C' }
  ];
  chartData1 = [];
  chartLabels1 = [];
  chartData2 = [];
  chartLabels2 = [];
res1;
  tempData = [];
  data = [];
  tempLabel = [];
  chartLabels = [];
  res;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.drawGraph(" 3days ");
    this.drawGraph2(' 7days ');
    this.drawGraph4(' 30days ');
  }
  drawGraph(value) {
    let tempData1 = [];
    let data1 = [];
    this.testService.getPageReact(value).subscribe(res => {
      this.res = res;
      if (this.res.length > 0) {
        for (let a in this.res) {
          tempData1.push(res[a].total_reaction);
          data1 = tempData1;
        }
      } else {
        this.data = [];
        this.chartLabels = [];
      }
      this.chartData.push({ data: data1.reverse(), label: "Page Reaction" });
      this.chart.chart.update();
    });
    this.drawGraph1(value);
  }
  drawGraph1(value) {
    this.chartData = [];
    this.tempData = [];
    this.tempLabel = [];
    this.data = [];
    this.chartLabels = [];
    this.testService.getTotalRevenue(value).subscribe(res => {
      this.res = res;
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
      this.chartData.push({ data: this.data.reverse(), label: "Revenue" });
    });
  }

  drawGraph2(value) {
    let tempData1 = [];
    let data1 = [];
    this.testService.getPageReact(value).subscribe(res => {
      this.res1 = res;
      if (this.res1.length > 0) {
        for (let a in this.res1) {
          tempData1.push(res[a].total_reaction);
          data1 = tempData1;
          console.log("revenue1", this.chartData1);
        }
      } else {
        this.data = [];
        this.chartLabels = [];
      }
      this.chartData1.push({ data: data1.reverse(), label: "Page Reaction" });
      this.chart.chart.update();
    });
    this.drawGraph3(value);
  }
  drawGraph3(value) {
    this.chartData1 = [];
    let tempData = [];
    let tempLabel = [];
    let data1 = [];
    this.chartLabels1 = [];
    this.testService.getTotalRevenue(value).subscribe(res => {
      this.res1 = res;
      if (this.res1.length > 0) {
        for (let a in this.res1) {
          tempLabel.push(res[a].created_time.slice(5, 10));
          tempData.push(res[a].total_revenue);
          data1 = tempData;
          this.chartLabels1 = tempLabel;
        }
      } else {
        this.data = [];
        this.chartLabels1 = [];
      }
      this.chartLabels1.reverse();
      this.chartData1.push({ data: data1.reverse(), label: "Revenue" });
      console.log("revenue1", this.chartData1);
    });
  }

  drawGraph4(value) {
    let tempData1 = [];
    let data1 = [];
    let res1;
    this.testService.getPageReact(value).subscribe(res => {
      res1 = res;
      if (this.res1.length > 0) {
        for (let a in res1) {
          tempData1.push(res[a].total_reaction);
          data1 = tempData1;
        }
      } else {
        this.data = [];
        this.chartLabels = [];
      }
      this.chartData2.push({ data: data1.reverse(), label: "Page Reaction" });
      this.chart.chart.update();
    });
    this.drawGraph5(value);
  }
  drawGraph5(value) {
    this.chartData1 = [];
    let tempData = [];
    let tempLabel = [];
    let data1 = [];
    this.chartLabels2 = [];
    this.testService.getTotalRevenue(value).subscribe(res => {
      this.res1 = res;
      if (this.res1.length > 0) {
        for (let a in this.res1) {
          tempLabel.push(res[a].created_time.slice(5, 10));
          tempData.push(res[a].total_revenue);
          data1 = tempData;
          this.chartLabels2 = tempLabel;
        }
      } else {
        this.data = [];
        this.chartLabels2 = [];
      }
      this.chartLabels2.reverse();
      this.chartData2.push({ data: data1.reverse(), label: "Revenue" });
    });
  }
}
