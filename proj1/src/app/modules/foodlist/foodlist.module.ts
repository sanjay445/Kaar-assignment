import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodlistRoutingModule } from './foodlist-routing.module';
import { FoodlistdetailsComponent } from './pages/foodlistdetails/foodlistdetails.component';
import { ShowdetailsComponent } from './pages/showdetails/showdetails.component';
import { FooditemsComponent } from './components/fooditems/fooditems.component';
import { OffersComponent } from './components/offers/offers.component';
import { PricePipe } from './components/pipes/price.pipe';



@NgModule({
  declarations: [
    FoodlistdetailsComponent,
    ShowdetailsComponent,
    FooditemsComponent,
    OffersComponent,
    PricePipe
  ],
  imports: [
    CommonModule,
    FoodlistRoutingModule
  ]
})
export class FoodlistModule { }
