import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FileuploadDirective } from "./directive/file-upload/fileupload.directive";
import { ProductCardGridComponent } from "./components/product-card-grid/product-card-grid.component";
import { RouterModule } from "@angular/router";
import { CarouselSlideComponent } from "./components/carousel-slide/carousel-slide.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { RatingModule } from "ng-starrating";
import { RatingComponent } from "./components/rating/rating.component";

@NgModule({
  declarations: [
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
    ProductCardComponent,
    RatingComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, RatingModule],
  exports: [
    CommonModule,
    FileuploadDirective,
    ProductCardGridComponent,
    CarouselSlideComponent,
    ProductCardComponent,
    RatingComponent,
  ],
})
export class SharedModule {}
