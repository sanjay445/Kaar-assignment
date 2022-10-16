import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayComponent } from './pages/pay/pay.component';

const routes: Routes = [
  { path : '',
  component: PayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
