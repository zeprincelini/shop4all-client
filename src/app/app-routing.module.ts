import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//component imports
import { HomeComponent } from "./home/home.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: "",
    component: MainContentComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "search", component: SearchComponent },
      {
        path: "product",
        loadChildren: () =>
          import("./modules/product/product.module").then(
            (m) => m.ProductModule
          ),
      },
    ],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
