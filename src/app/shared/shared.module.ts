import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FileuploadDirective } from "./directive/file-upload/fileupload.directive";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FileuploadDirective, ProductCardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CommonModule, FileuploadDirective, ProductCardComponent],
})
export class SharedModule {}
