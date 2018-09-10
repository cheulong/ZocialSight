import { SentimentService } from "./../sentiment.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-influencer",
  templateUrl: "./influencer.component.html",
  styleUrls: ["./influencer.component.scss"]
})
export class InfluencerComponent implements OnInit {
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";
  influencer;

  influencerFB = {
    name: "",
    engagement: [
      {
        Like: 0
      },
      {
        Love: 0
      },
      {
        Wow: 0
      },
      {
        Haha: 0
      },
      {
        Sad: 0
      },
      {
        Angry: 0
      },
      {
        Share: 0
      }
    ]
  };
  influencerTW = {
    name: "",
    engagement: [
      {
        Like: 0
      },
      {
        Retweet: 0
      }
    ]
  };
  influencerPT = {
    name: "",
    engagement: [
      {
        Feeling: 0
      },
      {
        Good: 0
      }
    ]
  };
  constructor(private sentimentService: SentimentService) {}

  ngOnInit() {
    this.getInfluencer();
  }
  getInfluencer() {
    this.sentimentService.getInfluencer().subscribe(res => {
      this.influencer = res;
      if (this.influencer.influencerFB)
        this.influencerFB = this.influencer.influencerFB;
      if (this.influencer.influencerTW)
        this.influencerTW = this.influencer.influencerTW;
      if (this.influencer.influencerPT)
        this.influencerPT = this.influencer.influencerPT;
    });
  }
}
