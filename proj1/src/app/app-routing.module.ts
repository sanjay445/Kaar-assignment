import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [

{ path : '',
  component : LoginComponent
}, 
{ path : 'loginSuccess',
loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
canActivate:[AuthGuardGuard]
},  
{ path : 'pay/:i',
 loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
