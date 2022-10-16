import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistdetailsComponent } from './pages/foodlistdetails/foodlistdetails.component';


const routes: Routes = [
  { path : '',
    component: FoodlistdetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodlistRoutingModule { }
