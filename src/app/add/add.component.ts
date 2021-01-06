import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  files: any = [];
  
  constructor() { }

  ngOnInit() {
  }
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
    console.log(this.files)
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
