import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  data: AOA = [[1, 2], [3, 4]];
  constructor(private saleService: SaleService) {}
  ngOnInit() {}
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      let wb: XLSX.WorkBook;
      try {
        wb = XLSX.read(bstr, { type: 'binary' });
        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
        const a = [];
        e = {};
        let c = {};
        for (let d = 0; d < this.data.length; d++) {
          c = {};
          if (d === 0) {
            e[this.data[d][0]] = this.data[d][1];
          } else if (d === 1) {
            e[this.data[d][0]] = new Date(
              (this.data[d][1] - (25567 + 1)) * 86400 * 1000
            )
              .toISOString()
              .substring(0, 10);
          } else if (d >= 3) {
            for (let b = 0; b < this.data[2].length; b++) {
              c[this.data[2][b]] = this.data[d][b];
            }
          }
          if (d > 2) {
            a.push(c);
          }
        }
        this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
        e['product_list'] = a;
        console.log(e);

        this.saleService.postExcelData(e).then(res => {
          alert('Access The Excel File Successfully');


        }).catch(err => {
          console.log(err);
        });
      } catch (e) {
        alert('Please input only excel file');
      }
    };
    console.log('done');

    reader.readAsBinaryString(target.files[0]);
  }
}
