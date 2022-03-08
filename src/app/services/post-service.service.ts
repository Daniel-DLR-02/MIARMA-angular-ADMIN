import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostList } from '../interfaces/post-list';

const API_BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})


export class PostService {


defaultHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer '+ localStorage.getItem('token')
  })
};

  constructor(private http: HttpClient) { }


  getPostUser(): Observable<PostList> {
    return this.http.get<PostList>(`${API_BASE_URL}/post/me`,this.defaultHeaders);
  }
}
