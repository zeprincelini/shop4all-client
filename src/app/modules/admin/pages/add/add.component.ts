import { Component, HostBinding, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { HttpRequestService } from "src/app/shared/service/product-service/http-request.service";
// import {MatSnackBar} from '@angular/material/snack-bar';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  files: any = [];
  gender = ["male", "female"];
  product = [
    "clothing",
    "jewellery",
    "watch",
    "shoe",
    "laptop",
    "mobile phone",
    "baby item",
  ];
  items: FormGroup;
  successStatus = false;
  errorStatus = false;
  data = {};

  constructor(private httpRequest: HttpRequestService) {}

  ngOnInit() {
    this.items = new FormGroup({
      name: new FormControl(null),
      gender: new FormControl("male"),
      product: new FormControl("clothing"),
      price: new FormControl(null),
      file: new FormControl(null),
    });
  }
  uploadFile(event) {
    const myfile = event[0];
    this.items.patchValue({
      file: myfile,
    });
    this.items.get("file").updateValueAndValidity();

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
    // console.log(this.files)
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  onSubmit() {
    let formData: any = new FormData();
    formData.append("name", this.items.get("name").value);
    formData.append("gender", this.items.get("gender").value);
    formData.append("product", this.items.get("product").value);
    formData.append("price", this.items.get("price").value);
    formData.append("file", this.items.get("file").value);

    this.httpRequest.postCloth(formData).subscribe(
      (res) => {
        this.successStatus = true;
        console.log(res);
      },
      (err) => {
        this.errorStatus = true;
        console.log(err);
      }
    );
    this.items.reset();
    this.files = [];
  }
}
