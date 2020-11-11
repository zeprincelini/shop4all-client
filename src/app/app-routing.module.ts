import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component imports
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

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"clothes", component: ClothesSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
