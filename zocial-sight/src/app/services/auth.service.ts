import { Injectable } from '@angular/core';
import {   Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:1111';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    console.log(user)
   let url: string = `${this.BASE_URL}/registration`;
   return this.http.post(url, user, {headers: this.headers}).toPromise();
 }

reset(user: User):Promise<any>{
  let url: string = `${this.BASE_URL}/resetPassword`;
  return this.http.post(url, user, {headers: this.headers}).toPromise();
}
}
