import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict-product',
  templateUrl: './predict-product.component.html',
  styleUrls: ['./predict-product.component.scss']
})
export class PredictProductComponent implements OnInit {
  foods = [
    { value: 'day', viewValue: 'day' },
    { value: 'week', viewValue: 'week' }
  ];
  selected = 'day';
  chartOptions = {
    responsive: true
  };

  chartData = [
    // { data: [0, 0, 0, 0,2,2], label: 'Facebook' }
    // { data: [120, 455, 100, 340], label: 'Account B' },
    // { data: [45, 67, 800, 500], label: 'Account C' }
  ];
  chartData1 = [];
  chartLabels1 = [];
  chartData2 = [];
  chartLabels2 = [];
res1;
  tempData = [];
  data = [];
  tempLabel = [];
  chartLabels = [];
  res;
  cokeRevenue = 0;
  fantaRevenue = 0;
  spriteRevenue = 0;
  b = 0;  c = 0;  d = 0;

  constructor(private saleService: SaleService) {}

  ngOnInit() {
    this.drawGraph(' day ');

  }
  drawGraph(value) {
    this.cokeRevenue = 0;
    this.fantaRevenue = 0;
    this.spriteRevenue = 0;
    const tempData1 = [];
    let data1 = [];
    if (value === ' day ') {
      this.saleService.getForecastRevenue(value).subscribe(res => {
        this.res = res;
        if (this.res.length > 0) {
          for (const a in this.res) {
            tempData1.push(res[a].product_list[0].product_quantity);
            data1 = tempData1;
          }
        } else {
          this.data = [];
          this.chartLabels = [];
        }
        this.chartData.push({ data: data1, label: 'Coke' });
        // this.chart.chart.update();
      });
    } else if (value === ' week ') {
      this.res = [];
      this.b = 0;
      this.saleService.getForecastRevenue(value).subscribe(res => {
        this.res = res;
        if (this.res.length > 0) {
          for (const a in this.res) {
            this.cokeRevenue = this.cokeRevenue + res[a].product_list[0].product_quantity;
            if (this.b % 7 === 6) {
              tempData1.push(this.cokeRevenue);
              this.cokeRevenue = 0;
            data1 = tempData1;

            }
          this.b = this.b + 1;
          }
        } else {
          this.data = [];
          this.chartLabels = [];
        }


        this.chartData.push({ data: data1, label: 'Coke' });
        // this.chart.chart.update();
      });
    }
    this.drawGraph1(value);
  }
  drawGraph1(value) {

    const tempData2 = [];
    let data2 = [];
    if (value === ' day ') {
    this.saleService.getForecastRevenue(value).subscribe(res => {
      this.res = res;
      if (this.res.length > 0) {
        for (const a in this.res) {
         tempData2.push(res[a].product_list[1].product_quantity);
          data2 = tempData2;
        }
      } else {
        this.data = [];
        this.chartLabels = [];
      }


      this.chartData.push({ data: data2, label: 'Fanta' });
    });
  } else {
     this.c = 0;
      this.saleService.getForecastRevenue(value).subscribe(res => {
        this.res = res;
        if (this.res.length > 0) {
          for (const a in this.res) {
            this.fantaRevenue = this.fantaRevenue + res[a].product_list[1].product_quantity;
            if (this.c % 7 === 6) {
              tempData2.push(this.fantaRevenue);
              this.fantaRevenue = 0;
            data2 = tempData2;

            }
          this.c = this.c + 1;
          }
        } else {
          this.data = [];
          this.chartLabels = [];
        }
console.log('data2', data2);

        this.chartData.push({ data: data2, label: 'Fanta' });
        // this.chart.chart.update();
      });
  }
    this.drawGraph2(value);
  }
  drawGraph2(value) {
    this.chartData = [];
    this.tempData = [];
    this.tempLabel = [];
    this.data = [];
    this.chartLabels = [];
    if (value === ' day ') {
    this.saleService.getForecastRevenue(value).subscribe(res => {
      this.res = res;
      if (this.res.length > 0) {
        for (const a in this.res) {
          this.tempLabel.push(res[a].date);
          this.tempData.push(res[a].product_list[2].product_quantity);
          this.data = this.tempData;
          this.chartLabels = this.tempLabel;
        }
      } else {
        this.data = [];
        this.chartLabels = [];
      }
      this.chartLabels;
      this.chartData.push({ data: this.data, label: 'Sprite' });
    });
  } else {
     this.d = 0;
      this.saleService.getForecastRevenue(value).subscribe(res => {
        this.res = res;
        if (this.res.length > 0) {
          for (const a in this.res) {
            this.spriteRevenue = this.spriteRevenue + res[a].product_list[2].product_quantity;
            if (this.d % 7 === 6) {
              this.tempLabel.push((res[a - 6].date + '_' + res[a].date));
              this.tempData.push(this.spriteRevenue);
              this.spriteRevenue = 0;
            this.data = this.tempData;
            this.chartLabels = this.tempLabel;
            }
          this.d = this.d + 1;
          }
        } else {
          this.data = [];
          this.chartLabels = [];
        }
        console.log('data2', this.data);
        this.chartData.push({ data: this.data, label: 'Sprite' });
        // this.chart.chart.update();
      });
  }

  }
  }

