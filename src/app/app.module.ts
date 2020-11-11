import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SpecialsComponent } from './specials/specials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { WeekComponent } from './week/week.component';
import { ClothesSectionComponent } from './clothes-section/clothes-section.component';
import { PhonesSectionComponent } from './phones-section/phones-section.component';
import { JewellerySectionComponent } from './jewellery-section/jewellery-section.component';
import { PcSectionComponent } from './pc-section/pc-section.component';
import { WatchSectionComponent } from './watch-section/watch-section.component';
import { ShoesSectionComponent } from './shoes-section/shoes-section.component';
import { BabySectionComponent } from './baby-section/baby-section.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ClothMaleComponent } from './cloth-male/cloth-male.component';
import { ClothFemaleComponent } from './cloth-female/cloth-female.component';

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
    ClothesSectionComponent,
    PhonesSectionComponent,
    JewellerySectionComponent,
    PcSectionComponent,
    WatchSectionComponent,
    ShoesSectionComponent,
    BabySectionComponent,
    CarouselComponent,
    ClothMaleComponent,
    ClothFemaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
