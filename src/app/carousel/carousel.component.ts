import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  images: object[] = [
    { src: "/assets/carousel/1.jpg", name: "Nike Shoes" },
    { src: "/assets/carousel/2.jpg", name: "Nike face cap" },
    { src: "/assets/carousel/3.jpg", name: "shoes" },
  ];

  constructor() {}

  ngOnInit() {}
}
