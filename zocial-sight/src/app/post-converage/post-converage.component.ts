import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-converage',
  templateUrl: './post-converage.component.html',
  styleUrls: ['./post-converage.component.scss']
})
export class PostConverageComponent implements OnInit {
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

chartData = [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }];


chartLabels = ['January', 'February', 'Mars', 'April'];
  constructor() { }

  ngOnInit() {
  }
  onChartClick(event) {
      console.log(event);
    }
}
