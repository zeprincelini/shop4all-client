import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClothFemaleComponent } from "./components/clothes/cloth-female/cloth-female.component";
import { ClothMaleComponent } from "./components/clothes/cloth-male/cloth-male.component";
import { ClothesSectionComponent } from "src/app/modules/product/pages/clothes-section/clothes-section.component";
import { ProductComponent } from "./product.component";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
