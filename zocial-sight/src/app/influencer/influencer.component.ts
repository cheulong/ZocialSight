import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {
  foods = [
    { value: "1day", viewValue: "1day" },
    { value: "3days", viewValue: "3days" },
    { value: "7days", viewValue: "7days" },
    { value: "30days", viewValue: "30days" }
  ];
  selected = "7days";
  constructor() { }

  ngOnInit() {
  }

}
