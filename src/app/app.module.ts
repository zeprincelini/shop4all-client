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
import { SignUpComponent } from './sign-up/sign-up.component';
import { WatchMaleComponent } from './watch-male/watch-male.component';
import { WatchFemaleComponent } from './watch-female/watch-female.component';
import { ShoesFemaleComponent } from './shoes-female/shoes-female.component';
import { ShoesMaleComponent } from './shoes-male/shoes-male.component';
import { JewelleryMaleComponent } from './jewellery-male/jewellery-male.component';
import { JewelleryFemaleComponent } from './jewellery-female/jewellery-female.component';
import { BabyFemaleComponent } from './baby-female/baby-female.component';
import { BabyMaleComponent } from './baby-male/baby-male.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    ClothFemaleComponent,
    SignUpComponent,
    WatchMaleComponent,
    WatchFemaleComponent,
    ShoesFemaleComponent,
    ShoesMaleComponent,
    JewelleryMaleComponent,
    JewelleryFemaleComponent,
    BabyFemaleComponent,
    BabyMaleComponent,
    SignInComponent,
    AdminDashboardComponent,
    MainContentComponent,
    AddComponent,
    DashboardComponent
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
