import { Injectable } from '@angular/core';
import {  Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class TestService {
  public now: Date = new Date();
  private date:string;
   private toDate:Date;
  constructor(private http: HttpClient,private datePipe: DatePipe) { }

     getAdvantageData(){
        let apiUrl = './assets/a.json';
        return this.http.get(apiUrl);

     }

     getFBData(date){
       this.date=date;
        console.log(date);
       if(this.date==' 1day '){

        this.toDate = new Date(this.now.getTime() - (24*60*60*1000));
        console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
        console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
        }
       else if(this.date==' 3days '){
        this.toDate = new Date(this.now.getTime() - 3*(24*60*60*1000));
        console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
        console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
      }
       else if(date==' 7days '){
        this.toDate = new Date(this.now.getTime() - 7*(24*60*60*1000));
        console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
        console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
      }
       else if(date==' 30days '){
        this.toDate = new Date(this.now.getTime() - 30*(24*60*60*1000));
        console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
        console.log(this.datePipe.transform(this.toDate,"yyyy-MM-dd"));
      }

       let URL='http://127.0.0.1:5000/post/'+this.datePipe.transform(this.toDate,"yyyy-MM-dd")+'/'+this.datePipe.transform(this.now,"yyyy-MM-dd");
       return this.http.get(URL);
     }
  }
