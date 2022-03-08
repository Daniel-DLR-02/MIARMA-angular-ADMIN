import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../interfaces/user-login';
import { Observable } from 'rxjs';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  })
};

const API_BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }


  login(user: UserLogin): Observable<any> {
    return this.http.post(`${API_BASE_URL}/auth/login`, user, DEFAULT_HEADERS);
  }
}
