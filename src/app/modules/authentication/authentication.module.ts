import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material/material.module";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, MaterialModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
