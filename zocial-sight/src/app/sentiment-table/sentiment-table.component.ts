import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";

@Component({
  selector: "app-sentiment-table",
  templateUrl: "./sentiment-table.component.html",
  styleUrls: ["./sentiment-table.component.scss"]
})
export class SentimentTableComponent implements OnInit {
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";
  pos = 0;
  neg = 0;
  temp: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.changeDate(" 7days ");
  }
  changeDate(date) {
    this.testService.getSentiment(date).subscribe(res => {
      this.temp = res;
      if (this.temp["neg"] + this.temp["pos"] != 0) {
        this.pos = this.temp["pos"];
        this.neg = this.temp["neg"];
      }
    });
  }
}
