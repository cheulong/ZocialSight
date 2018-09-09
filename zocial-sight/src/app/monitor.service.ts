import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private toDate: Date;
  public now: Date = new Date("2018-06-10");
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getOldDate(value) {
    console.log(this.now);
    if (value == " 1day ") {
      this.toDate = new Date(this.now.getTime() - 24 * 60 * 60 * 1000);
      console.log(this.datePipe.transform(this.now, "yyyy-MM-dd"));
      console.log(this.datePipe.transform(this.toDate, "yyyy-MM-dd"));
    } else if (value == " 3days ") {
      this.toDate = new Date(this.now.getTime() - 3 * (24 * 60 * 60 * 1000));
      // console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
      // console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
    } else if (value == " 7days ") {
      this.toDate = new Date(this.now.getTime() - 7 * (24 * 60 * 60 * 1000));
      // console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
      // console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
    } else if (value == " 30days ") {
      this.toDate = new Date(this.now.getTime() - 30 * (24 * 60 * 60 * 1000));
      // console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
      // console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
    }
  }
  getPageReact(date){
    this.getOldDate(date);
    let URL =
      "http://127.0.0.1:5000/getPageReact/" +
      this.datePipe.transform(this.toDate, "yyyy-MM-dd") +
      "/" +
      this.datePipe.transform(this.now, "yyyy-MM-dd");
      
    return this.http.get(URL);
  }
}
