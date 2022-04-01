import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FileuploadDirective } from "./directive/file-upload/fileupload.directive";
import { ProductCardGridComponent } from "./components/product-card-grid/product-card-grid.component";
import { RouterModule } from "@angular/router";
import { CarouselSlideComponent } from "./components/carousel-slide/carousel-slide.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";

@NgModule({
  declarations: [
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    CommonModule,
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
    ProductCardComponent,
  ],
})
export class SharedModule {}
