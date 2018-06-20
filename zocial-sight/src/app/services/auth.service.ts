import { Injectable } from '@angular/core';
import {  Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:1111';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    console.log(user);
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    console.log(user)
   let url: string = `${this.BASE_URL}/registration`;
   return this.http.post(url, user, {headers: this.headers}).toPromise();
 }
 ensureAuthenticated(token): Promise<any> {
  let url: string = `${this.BASE_URL}/status`;
  let headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  });
  return this.http.get(url, {headers: headers}).toPromise();
}
}
