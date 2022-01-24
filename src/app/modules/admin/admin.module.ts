import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "src/app/modules/admin/pages/dashboard/dashboard.component";
import { MaterialModule } from "src/app/material/material.module";
import { AdminRoutingModule } from "./admin.routing.module";
import { AddComponent } from "./pages/add/add.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AddComponent, AdminDashboardComponent, DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AdminModule {}
