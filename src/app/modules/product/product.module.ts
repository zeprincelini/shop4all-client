import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material/material.module";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { ClothMaleComponent } from "./components/clothes/cloth-male/cloth-male.component";
import { ClothFemaleComponent } from "./components/clothes/cloth-female/cloth-female.component";
import { ClothesSectionComponent } from "./pages/clothes-section/clothes-section.component";

@NgModule({
  declarations: [
    ProductComponent,
    ClothFemaleComponent,
    ClothMaleComponent,
    ClothesSectionComponent,
  ],
  imports: [CommonModule, MaterialModule, ProductRoutingModule],
})
export class ProductModule {}
