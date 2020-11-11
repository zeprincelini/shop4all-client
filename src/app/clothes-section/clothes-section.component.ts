import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-section',
  templateUrl: './clothes-section.component.html',
  styleUrls: ['./clothes-section.component.css']
})
export class ClothesSectionComponent implements OnInit {
links = ["male", "female"];
activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
