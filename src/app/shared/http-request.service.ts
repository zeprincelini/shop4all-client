import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpRequestService {
  private clothPost = "http://localhost:3000/api/clothes";
  private fakestore = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  postCloth(body) {
    return this.http.post<any>(this.clothPost, body);
  }

  getProducts() {
    return this.http.get(this.fakestore);
  }
}
