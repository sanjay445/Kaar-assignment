import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'university',
        loadChildren: () => import('../university/university.module').then(m => m.UniversityModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../foodlist/foodlist.module').then(m => m.FoodlistModule)
      },
      {
        path: 'InfiniteScroll',
        loadChildren: () => import('../university/university.module').then(m => m.UniversityModule)
      }
    ],
    
  },
  { path : 'pay/:i',
 loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
