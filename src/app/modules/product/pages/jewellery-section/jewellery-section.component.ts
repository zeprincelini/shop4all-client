import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jewellery-section",
  templateUrl: "./jewellery-section.component.html",
  styleUrls: ["./jewellery-section.component.css"],
})
export class JewellerySectionComponent implements OnInit {
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
