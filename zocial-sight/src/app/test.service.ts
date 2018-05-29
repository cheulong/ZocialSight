import { Injectable } from '@angular/core';
import {  Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }

     getAdvantageData(){
        let apiUrl = './assets/a.json';
        return this.http.get(apiUrl);

     }

     getFBData(){
       let URL='http://127.0.0.1:5000/post';
       return this.http.get(URL);
     }
  }
