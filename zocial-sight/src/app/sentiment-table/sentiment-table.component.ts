import { Component, OnInit } from "@angular/core";
import { SentimentService } from "../sentiment.service";

@Component({
  selector: "app-sentiment-table",
  templateUrl: "./sentiment-table.component.html",
  styleUrls: ["./sentiment-table.component.scss"]
})
export class SentimentTableComponent implements OnInit {
  show=false;
  text='';
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";
  pos;
  neg;
  temp: any;
  constructor(private sentimentService: SentimentService) {}

  ngOnInit() {
    this.getSentiment(" 7days ");
  }
  getSentiment(date) {
    this.sentimentService.getSentimentText(date).subscribe(res => {
      this.temp = res;
        this.pos = this.findPosSentiment(this.temp);
        this.neg = this.findNegSentiment(this.temp);
      console.log('pos',this.pos);
      
    });
  }
  findPosSentiment(sentimentList){return sentimentList["pos"] }
  findNegSentiment(sentimentList){ return sentimentList["neg"]}
  showAll(text){
    this.text=text;
    this.show=!this.show;
  }
}
