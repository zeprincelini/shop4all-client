import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { SpecialsComponent } from "./specials/specials.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { WeekComponent } from "./week/week.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { HttpRequestService } from "./shared/service/product-service/http-request.service";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductsComponent,
    SpecialsComponent,
    NewsletterComponent,
    FooterComponent,
    WeekComponent,
    MainContentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
