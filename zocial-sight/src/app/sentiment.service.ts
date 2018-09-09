import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private toDate: Date;
  public now: Date = new Date("2018-06-10");

  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  getOldDate(value) {
    if (value == " 1day ") {
      this.toDate = new Date(this.now.getTime() - 24 * 60 * 60 * 1000);
      console.log(this.datePipe.transform(this.now, "yyyy-MM-dd"));
      console.log(this.datePipe.transform(this.toDate, "yyyy-MM-dd"));
    } else if (value == " 3days ") {
      this.toDate = new Date(this.now.getTime() - 3 * (24 * 60 * 60 * 1000));

    } else if (value == " 7days ") {
      this.toDate = new Date(this.now.getTime() - 7 * (24 * 60 * 60 * 1000));
  
    } else if (value == " 30days ") {
      this.toDate = new Date(this.now.getTime() - 30 * (24 * 60 * 60 * 1000));
  
    }
  }
  getSentiment(date) {
    this.getOldDate(date);
    let URL =
      "http://127.0.0.1:5000/getSentiment/" +
      this.datePipe.transform(this.toDate, "yyyy-MM-dd") +
      "/" +
      this.datePipe.transform(this.now, "yyyy-MM-dd");
    return this.http.get(URL);
  }
  getSentimentText(date) {
    this.getOldDate(date);
    let URL =
      "http://127.0.0.1:5000/getSentimentText/" +
      this.datePipe.transform(this.toDate, "yyyy-MM-dd") +
      "/" +
      this.datePipe.transform(this.now, "yyyy-MM-dd");
    return this.http.get(URL);
  }


  getTopUser(){
    let URL = "http://127.0.0.1:5000/topuser/2018-06-08/2018-06-10";
    return this.http.get(URL);
  }
  getInfluencer(){
    let URL = "http://127.0.0.1:5000/influencer/2018-06-08/2018-06-10";
    return this.http.get(URL);
  }
  getTopWord(){
    let URL = "http://127.0.0.1:5000/getWordCloud/2018-06-08/2018-06-10";
    return this.http.get(URL);
  }

 
}
