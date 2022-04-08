import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  data: string[] = [
    "/assets/carousel/1.jpg",
    "/assets/carousel/2.jpg",
    "/assets/carousel/3.jpg",
  ];
  carousel = "carouselOne";
  constructor() {}

  ngOnInit() {}
}
