import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {
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

  chartData = [
  { data: [330, 600, 260, 700], label: 'Account A' },

  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  constructor() { }

  ngOnInit() {
  }

}
