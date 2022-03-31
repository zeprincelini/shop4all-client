import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpRequestService {
  private addProduct = "http://localhost:3000/api/v1/product";
  private products = "https://fakestoreapi.com/products";
  private product = "https://fakestoreapi.com/product";

  constructor(private http: HttpClient) {}

  postCloth(body: any) {
    return this.http.post<any>(this.addProduct, body);
  }

  getProducts() {
    return this.http.get(this.products);
  }

  getProduct(id: string) {
    return this.http.get(`${this.product}/${id}`);
  }
}
