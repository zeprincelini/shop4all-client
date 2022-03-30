import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FileuploadDirective } from "./fileupload.directive";
import { ProductCardComponent } from "./components/product-card/product-card.component";

@NgModule({
  declarations: [FileuploadDirective, ProductCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, FileuploadDirective, ProductCardComponent],
})
export class SharedModule {}
