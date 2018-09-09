import { Component, OnInit, ViewChild } from "@angular/core";
import { TestService } from "./../../test.service";
import { BaseChartDirective } from "ng2-charts/ng2-charts";
@Component({
  selector: 'app-week-pie',
  templateUrl: './week-pie.component.html',
  styleUrls: ['./week-pie.component.scss']
})
export class WeekPieComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective;

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
  chartLabels = ["Positive", "Negative"];
  chartLabels1 = ["Positive", "Negative"];
  chartLabels2 = ["Positive", "Negative"];
  chartData = [{ data: [,], label: "Account A" }];
  chartData1 = [];
  chartData2 = [{ data: [,], label: "Account C" }];

  pos = 0;
  neg = 0;
posNum=0;
negNum=0;
  temp: any;
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.changeDate(" 7days ");
  }
  changeDate(date) {
    this.testService.getSentiment(date).subscribe(res => {
      this.temp = res;
      if (this.temp["neg"] + this.temp["pos"] != 0) {
        this.posNum=this.temp["pos"];
        this.negNum=this.temp["neg"];
        this.pos = Math.round(
          (this.temp["pos"] / (this.temp["neg"] + this.temp["neg"])) * 100
        );
        this.neg = 100 - this.pos;
        this.chartData[0].data[0] = this.temp["pos"];
        this.chartData[0].data[1] = this.temp["neg"];
        this.chart.chart.update();
      }
    });
  }
}
