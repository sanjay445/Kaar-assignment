import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinitescrollComponent } from './pages/infinitescroll/infinitescroll.component';
import { UniversityComponent } from './pages/university/university.component';

const routes: Routes = [
  { path : '',
    component: UniversityComponent
  },
  { path : 'scrollpage',
  component: InfinitescrollComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
