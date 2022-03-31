import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { ClothMaleComponent } from "./components/clothes/cloth-male/cloth-male.component";
import { ClothFemaleComponent } from "./components/clothes/cloth-female/cloth-female.component";
import { ClothesSectionComponent } from "./pages/clothes-section/clothes-section.component";
import { JewellerySectionComponent } from "./pages/jewellery-section/jewellery-section.component";
import { JewelleryFemaleComponent } from "./components/jewellery/jewellery-female/jewellery-female.component";
import { JewelleryMaleComponent } from "./components/jewellery/jewellery-male/jewellery-male.component";
import { ShoesFemaleComponent } from "./components/shoes/shoes-female/shoes-female.component";
import { ShoesMaleComponent } from "./components/shoes/shoes-male/shoes-male.component";
import { ShoesSectionComponent } from "./pages/shoes-section/shoes-section.component";
import { WatchFemaleComponent } from "./components/watches/watch-female/watch-female.component";
import { WatchMaleComponent } from "./components/watches/watch-male/watch-male.component";
import { WatchSectionComponent } from "./pages/watch-section/watch-section.component";
import { BabyFemaleComponent } from "./components/baby/baby-female/baby-female.component";
import { BabyMaleComponent } from "./components/baby/baby-male/baby-male.component";
import { BabySectionComponent } from "./pages/baby-section/baby-section.component";
import { ViewProductComponent } from "./pages/view-product/view-product.component";
import { PhonesSectionComponent } from "./pages/phones-section/phones-section.component";
import { PcSectionComponent } from "./pages/pc-section/pc-section.component";

@NgModule({
  declarations: [
    ProductComponent,
    ClothFemaleComponent,
    ClothMaleComponent,
    ClothesSectionComponent,
    JewellerySectionComponent,
    JewelleryFemaleComponent,
    JewelleryMaleComponent,
    ShoesFemaleComponent,
    ShoesMaleComponent,
    ShoesSectionComponent,
    WatchFemaleComponent,
    WatchMaleComponent,
    WatchSectionComponent,
    BabyFemaleComponent,
    BabyMaleComponent,
    BabySectionComponent,
    ViewProductComponent,
    PhonesSectionComponent,
    PcSectionComponent,
  ],
  imports: [CommonModule, MaterialModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
