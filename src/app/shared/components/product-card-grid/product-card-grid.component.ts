import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-card-grid",
  templateUrl: "./product-card-grid.component.html",
  styleUrls: ["./product-card-grid.component.css"],
})
export class ProductCardGridComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
