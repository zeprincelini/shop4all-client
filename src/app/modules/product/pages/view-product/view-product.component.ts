import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpRequestService } from "src/app/shared/service/product-service/http-request.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"],
})
export class ViewProductComponent implements OnInit {
  productId: string;
  product: {};
  loading = false;
  constructor(
    private httpRequestService: HttpRequestService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProduct(this.productId);
  }
  getProduct = (id: string) => {
    this.loading = true;
    this.httpRequestService.getProduct(id).subscribe(
      (res) => {
        this.loading = false;
        this.product = res;
      },
      (err) => {
        this.loading = false;
        this._snackBar.open("failed to get product", "dismiss", {
          duration: 3000,
        });
      }
    );
  };
}
