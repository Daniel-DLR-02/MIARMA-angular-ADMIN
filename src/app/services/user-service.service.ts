import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const API_BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  constructor(private http: HttpClient) { }
}
