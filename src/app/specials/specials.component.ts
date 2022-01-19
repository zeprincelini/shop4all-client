import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-specials",
  templateUrl: "./specials.component.html",
  styleUrls: ["./specials.component.css"],
})
export class SpecialsComponent implements OnInit {
  data = [
    {
      path: "../../assets/products/bag.jpg",
      title: "versace",
      price: "$150",
      rating: "5 stars",
    },
    {
      path: "../../assets/products/rolex.jpg",
      title: "vivendi",
      price: "$250",
      rating: "3 stars",
    },
    {
      path: "../../assets/products/nike.jpg",
      title: "nike shoes",
      price: "$550",
      rating: "5 stars",
    },
    {
      path: "../../assets//products/neck.jpg",
      title: "trendy jewel",
      price: "$360",
      rating: "4 stars",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
