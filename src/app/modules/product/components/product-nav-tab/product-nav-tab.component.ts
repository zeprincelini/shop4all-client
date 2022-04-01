import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-nav-tab",
  templateUrl: "./product-nav-tab.component.html",
  styleUrls: ["./product-nav-tab.component.css"],
})
export class ProductNavTabComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor() {
    this.navLinks = [
      {
        label: "Male",
        link: "./",
        index: 0,
      },
      {
        label: "Female",
        link: "./female",
        index: 1,
      },
    ];
  }
  ngOnInit(): void {}
}
