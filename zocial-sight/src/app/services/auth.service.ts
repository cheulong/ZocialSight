import { Injectable } from '@angular/core';
import {   Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:1111';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}
  login(user: User): Promise<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
   const url = `${this.BASE_URL}/registration`;
   return this.http.post(url, user, {headers: this.headers}).toPromise();
 }

reset(user: User): Promise<any> {
  const url = `${this.BASE_URL}/resetPassword`;
  return this.http.post(url, user, {headers: this.headers}).toPromise();
}
deleteUser(username) {
  const URL = 'http://127.0.0.1:1111/delete';
  return this.http.post(URL, {'username': username}, { headers: this.headers });
}
getUser(username) {

   const URL = 'http://127.0.0.1:1111/user/' + username;
   return this.http.get(URL);
}
updateUser(user) {
  const URL = 'http://127.0.0.1:1111/update';
  return this.http.put(URL, user, { headers: this.headers });
}
}
