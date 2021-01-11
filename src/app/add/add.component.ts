import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  files: any = [];
  gender = ['male', 'female'];
  items: FormGroup;
  
  constructor() {}

  ngOnInit() {
    this.items = new FormGroup({
      cloth: new FormControl(null),
      gender: new FormControl('male'),
      price: new FormControl(null),
      file: new FormControl(null)
    });
  }
  uploadFile(event) {
    const myfile = (event.target as HTMLInputElement).files[0];
    this.items.patchValue({
      file: myfile
    });
    this.items.get('file').updateValueAndValidity();

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
    ///console.log(this.files)
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  onSubmit(form: NgForm){
    console.log(this.items);
  }
}
