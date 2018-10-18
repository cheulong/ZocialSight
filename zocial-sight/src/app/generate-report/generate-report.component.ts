import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {
  show = false;
  foods = [
    { value: 'sales', viewValue: 'sales' },
    { value: 'product', viewValue: 'product' }
  ];
  foods1 = [
    { value: 'day', viewValue: 'day' },
    { value: 'week', viewValue: 'week' }
  ];
  selected = 'sales';
  selected1 = 'day';
  constructor(private saleService: SaleService) {}
  topUsers;
  topUsers1 = [];
   cokeRevenue = 0;
   fantaRevenue = 0;
   spriteRevenue = 0;
  b = 0;
  ngOnInit() {
  }
  generate() {

    this.b = 0;
    this.topUsers1 = [];
    this.topUsers = [];
    this.saleService.getForecastRevenue(' 30days ').subscribe(res => {
      this.topUsers = res;
      for (let a = 0; a <  this.topUsers.length; a++) {
        if (this.selected === 'sales') {
          this.cokeRevenue = this.cokeRevenue + this.topUsers[a].product_list[0].total_revenue;
          this.fantaRevenue = this.fantaRevenue + this.topUsers[a].product_list[1].total_revenue;
          this.spriteRevenue = this.spriteRevenue + this.topUsers[a].product_list[2].total_revenue;
          if (this.selected1 === 'week') {
            if (this.b % 7 === 6) {


              this.topUsers1.push({'date': this.topUsers[a - 6].date + '_' + this.topUsers[a].date, 'coke': this.cokeRevenue, 'fanta': this.fantaRevenue, 'sprite': this.spriteRevenue});
              this.cokeRevenue = 0;
              this.fantaRevenue = 0;
              this.spriteRevenue = 0;
            }
            this.b = this.b + 1;
          } else {
            this.topUsers1.push({'date': this.topUsers[a].date, 'coke': this.topUsers[a].product_list[0].total_revenue, 'fanta': this.topUsers[a].product_list[1].total_revenue, 'sprite': this.topUsers[a].product_list[2].total_revenue});
          }
        } else {
          this.cokeRevenue = this.cokeRevenue + this.topUsers[a].product_list[0].product_quantity;
          this.fantaRevenue = this.fantaRevenue + this.topUsers[a].product_list[1].product_quantity;
          this.spriteRevenue = this.spriteRevenue + this.topUsers[a].product_list[2].product_quantity;
          if (this.selected1 === 'week') {
            if (this.b % 7 === 6) {
              this.topUsers1.push({'date': this.topUsers[a - 6].date + '_' + this.topUsers[a].date, 'coke': this.cokeRevenue, 'fanta': this.fantaRevenue, 'sprite': this.spriteRevenue});
              this.cokeRevenue = 0;
              this.fantaRevenue = 0;
              this.spriteRevenue = 0;
            }
            this.b = this.b + 1;
          } else {
            this.topUsers1.push({'date': this.topUsers[a].date, 'coke': this.topUsers[a].product_list[0].product_quantity, 'fanta': this.topUsers[a].product_list[1].product_quantity, 'sprite': this.topUsers[a].product_list[2].product_quantity});
          }
        }

      }
    });
    this.show = !this.show;


  }
  download() {
    const data = [
      {'date': '2018-10-17_2018-10-23', 'coke': '60300', 'fanta': '59520', 'sprite': '70800'},
      {'date': '2018-10-24_2018-10-30', 'coke': '30420', 'fanta': '29910', 'sprite': '34760'},
      {'date': '2018-10-31_2018-11-06', 'coke': '35620', 'fanta': '32940', 'sprite': '39440'},

  ];



  /* make the worksheet */
  const ws = XLSX.utils.json_to_sheet(data);

  /* add to workbook */
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'People');


  /* generate an XLSX file */
  XLSX.writeFile(wb, 'sheetjs.xlsx');
  }
}

