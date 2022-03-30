import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shoes-section",
  templateUrl: "./shoes-section.component.html",
  styleUrls: ["./shoes-section.component.css"],
})
export class ShoesSectionComponent implements OnInit {
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
  ngOnInit() {}
}
