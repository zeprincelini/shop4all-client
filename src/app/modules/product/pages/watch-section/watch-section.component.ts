import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-watch-section",
  templateUrl: "./watch-section.component.html",
  styleUrls: ["./watch-section.component.css"],
})
export class WatchSectionComponent implements OnInit {
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
