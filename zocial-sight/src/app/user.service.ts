import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() {
    let URL = "http://127.0.0.1:1111/users";

    return this.http.get(URL);
  }
}
