import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effective-product',
  templateUrl: './effective-product.component.html',
  styleUrls: ['./effective-product.component.scss']
})
export class EffectiveProductComponent implements OnInit {
  foods = [
    { value: '1day', viewValue: '1day' },
    { value: '3days', viewValue: '3days' },
    { value: '7days', viewValue: '7days' },
    { value: '30days', viewValue: '30days' }
  ];
  selected = '7days';
  constructor(private saleService: SaleService) {}
  topUsers;
  topUsers1 = [];
   cokeRevenue = 0;
   fantaRevenue = 0;
   spriteRevenue = 0;
  b = 0;
  ngOnInit() {
    this.getTopUser();
  }
  getTopUser() {
    this.saleService.getTotalRevenue1(' 30days ').subscribe(res => {
      this.topUsers = res;

      if (this.topUsers.length > 0) {
        for (const a in this.topUsers) {
          this.cokeRevenue = this.cokeRevenue + this.topUsers[a].product_list[0].total_revenue;
          this.fantaRevenue = this.fantaRevenue + this.topUsers[a].product_list[1].total_revenue;
          this.spriteRevenue = this.spriteRevenue + this.topUsers[a].product_list[2].total_revenue;
          if (this.b % 7 === 6) {
            this.topUsers1.push({'date': this.topUsers[a - 6].date + '_' + this.topUsers[a].date, 'cokePrice': this.cokeRevenue, 'fantaPrice': this.fantaRevenue, 'spritePrice': this.spriteRevenue});
            this.cokeRevenue = 0;
          }
          this.b = this.b + 1;
          // tempData1.push(this.topUsers[a].product_list[0].total_revenue);
          // data1 = tempData1;
        }
        console.log(this.topUsers1);

      }
    });

  }
}
