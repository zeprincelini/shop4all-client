import { Component, Input, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-product-card-grid",
  templateUrl: "./product-card-grid.component.html",
  styleUrls: ["./product-card-grid.component.css"],
})
export class ProductCardGridComponent implements OnInit {
  @Input() data: any;
  isMobile: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }
}
