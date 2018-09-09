import { TestService } from "./../test.service";
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
  influencerFB;
  influencerTW;
  influencerPT;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.getInfluencer().subscribe(res => {
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
