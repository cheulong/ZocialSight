import { Component, OnInit } from '@angular/core';
import { Data } from './../share/data';
@Component({
  selector: 'app-top-trend',
  templateUrl: './top-trend.component.html',
  styleUrls: ['./top-trend.component.scss']
})
export class TopTrendComponent implements OnInit {
    data = Data;
  constructor() { }

  ngOnInit() {
  }

}
