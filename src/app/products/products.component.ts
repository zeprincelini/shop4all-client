import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private breakpointsObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointsObserver
      .observe(["(max-width: 768px)"])
      .subscribe((res) => {
        this.isMobile = res.matches;
      });
  }
}
