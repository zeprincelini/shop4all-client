import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
private clothPost = "http://localhost:3000/api/clothes";

  constructor(private http: HttpClient) { }

  postCloth(body){
    return this.http.post<any>(this.clothPost, body);
  }
}
