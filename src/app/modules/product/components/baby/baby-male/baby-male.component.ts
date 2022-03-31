import { Component, OnInit } from "@angular/core";
import { HttpRequestService } from "src/app/shared/service/product-service/http-request.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-baby-male",
  templateUrl: "./baby-male.component.html",
  styleUrls: ["./baby-male.component.css"],
})
export class BabyMaleComponent implements OnInit {
  products = [];
  loading = false;
  constructor(
    private httpRequest: HttpRequestService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loading = true;
    this.httpRequest.getProducts().subscribe(
      (res: any) => {
        this.loading = false;
        this.products = res;
      },
      (err) => {
        this.loading = false;
        this._snackBar.open("failed to get products", "dismiss", {
          duration: 3000,
        });
      }
    );
  }
}
