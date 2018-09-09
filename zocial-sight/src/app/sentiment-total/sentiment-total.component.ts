import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseChartDirective } from "ng2-charts/ng2-charts";
import { SentimentService } from "../sentiment.service";
@Component({
  selector: "app-sentiment-total",
  templateUrl: "./sentiment-total.component.html",
  styleUrls: ["./sentiment-total.component.scss"]
})
export class SentimentTotalComponent implements OnInit {
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

  constructor(private sentimentService: SentimentService) {}

  ngOnInit() {
    this.getSentiment(" 3days ");
  }
  getSentiment(date) {
    this.sentimentService.getSentiment(date).subscribe(res => {
      this.temp = res;
      if (this.temp["neg"] + this.temp["pos"] != 0) {
      this.posNum=this.getPosSentiment(this.temp);
      this.negNum=this.getNegSentiment(this.temp);
        this.pos = Math.round(
          (this.temp["pos"] / (this.temp["neg"] + this.temp["neg"])) * 100
        );
        this.neg = 100 - this.pos;
        this.chartData[0].data[0] = this.getPosSentiment(this.temp);
        this.chartData[0].data[1] = this.getNegSentiment(this.temp);
        this.chart.chart.update();
      }
    });
  }
  getPosSentiment(sentimentList){return sentimentList['pos']}
  getNegSentiment(sentimentList){return sentimentList['neg']}
}
