import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClothFemaleComponent } from "./components/clothes/cloth-female/cloth-female.component";
import { ClothMaleComponent } from "./components/clothes/cloth-male/cloth-male.component";
import { ClothesSectionComponent } from "src/app/modules/product/pages/clothes-section/clothes-section.component";
import { ProductComponent } from "./product.component";
import { WatchSectionComponent } from "./pages/watch-section/watch-section.component";
import { WatchMaleComponent } from "./components/watches/watch-male/watch-male.component";
import { WatchFemaleComponent } from "./components/watches/watch-female/watch-female.component";
import { JewellerySectionComponent } from "./pages/jewellery-section/jewellery-section.component";
import { JewelleryMaleComponent } from "./components/jewellery/jewellery-male/jewellery-male.component";
import { JewelleryFemaleComponent } from "./components/jewellery/jewellery-female/jewellery-female.component";
import { ShoesSectionComponent } from "./pages/shoes-section/shoes-section.component";
import { ShoesMaleComponent } from "./components/shoes/shoes-male/shoes-male.component";
import { ShoesFemaleComponent } from "./components/shoes/shoes-female/shoes-female.component";
import { PcSectionComponent } from "./pages/pc-section/pc-section.component";
import { BabySectionComponent } from "./pages/baby-section/baby-section.component";
import { BabyMaleComponent } from "./components/baby/baby-male/baby-male.component";
import { BabyFemaleComponent } from "./components/baby/baby-female/baby-female.component";
import { PhonesSectionComponent } from "./pages/phones-section/phones-section.component";
import { ViewProductComponent } from "./pages/view-product/view-product.component";

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
    children: [
      {
        path: "clothes",
        component: ClothesSectionComponent,
        children: [
          { path: "", component: ClothMaleComponent },
          { path: "female", component: ClothFemaleComponent },
        ],
      },
      {
        path: "watches",
        component: WatchSectionComponent,
        children: [
          { path: "", component: WatchMaleComponent },
          { path: "female", component: WatchFemaleComponent },
        ],
      },
      {
        path: "jewelleries",
        component: JewellerySectionComponent,
        children: [
          { path: "", component: JewelleryMaleComponent },
          { path: "female", component: JewelleryFemaleComponent },
        ],
      },
      {
        path: "shoes",
        component: ShoesSectionComponent,
        children: [
          { path: "", component: ShoesMaleComponent },
          { path: "female", component: ShoesFemaleComponent },
        ],
      },
      {
        path: "pc",
        component: PcSectionComponent,
      },
      {
        path: "babies",
        component: BabySectionComponent,
        children: [
          { path: "", component: BabyMaleComponent },
          { path: "female", component: BabyFemaleComponent },
        ],
      },
      {
        path: "phones",
        component: PhonesSectionComponent,
      },
    ],
  },
  {
    path: ":id",
    component: ViewProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
