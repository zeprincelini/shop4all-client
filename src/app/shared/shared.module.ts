import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FileuploadDirective } from "./directive/file-upload/fileupload.directive";
import { ProductCardGridComponent } from "./components/product-card-grid/product-card-grid.component";
import { RouterModule } from "@angular/router";
import { CarouselSlideComponent } from "./components/carousel-slide/carousel-slide.component";

@NgModule({
  declarations: [
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    CommonModule,
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
  ],
})
export class SharedModule {}
