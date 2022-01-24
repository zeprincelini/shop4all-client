import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "src/app/modules/admin/pages/dashboard/dashboard.component";
import { AddComponent } from "./pages/add/add.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "add-product", component: AddComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
