import { Component, OnInit } from "@angular/core";
import { HttpRequestService } from "../http-request.service";

@Component({
  selector: "app-cloth-male",
  templateUrl: "./cloth-male.component.html",
  styleUrls: ["./cloth-male.component.css"],
})
export class ClothMaleComponent implements OnInit {
  hold = 10;
  data = [];
  constructor(private httpRequest: HttpRequestService) {}

  ngOnInit() {
    this.httpRequest.getProducts().subscribe(
      (res: any) => (this.data = res),
      (err) => console.log(err)
    );
  }
}
