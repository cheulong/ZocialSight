import { Component, OnInit,ViewChild } from '@angular/core';
import { TestService } from "./../test.service";
// import { BaseChartDirective } from "ng2-charts/ng2-charts";
@Component({
  selector: 'app-oppo-sentiment-total',
  templateUrl: './oppo-sentiment-total.component.html',
  styleUrls: ['./oppo-sentiment-total.component.scss']
})
export class OppoSentimentTotalComponent implements OnInit {
  // @ViewChild(BaseChartDirective)
  // chart: BaseChartDirective;

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
  posNum = 0;
  negNum = 0;
  temp: any;
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.changeDate(" 3days ");
  }
  changeDate(date) {
      let res={"neg":5,"pos":8};
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
        // this.chart.chart.update();
      }
  
  }
}
