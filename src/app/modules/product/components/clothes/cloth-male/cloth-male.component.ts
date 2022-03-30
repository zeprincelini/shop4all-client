import { Component, OnInit } from "@angular/core";
import { HttpRequestService } from "src/app/shared/http-request.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cloth-male",
  templateUrl: "./cloth-male.component.html",
  styleUrls: ["./cloth-male.component.css"],
})
export class ClothMaleComponent implements OnInit {
  data = [];
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
        this.data = res;
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
