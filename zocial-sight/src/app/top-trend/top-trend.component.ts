import { Component, OnInit } from '@angular/core';
import { Data } from './../share/data';
@Component({
  selector: 'app-top-trend',
  templateUrl: './top-trend.component.html',
  styleUrls: ['./top-trend.component.scss']
})
export class TopTrendComponent implements OnInit {
    data = Data;
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
