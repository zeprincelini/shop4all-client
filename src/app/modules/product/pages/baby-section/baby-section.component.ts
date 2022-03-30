import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baby-section",
  templateUrl: "./baby-section.component.html",
  styleUrls: ["./baby-section.component.css"],
})
export class BabySectionComponent implements OnInit {
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
