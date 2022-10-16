import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './pages/university/university.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfinitescrollComponent } from '../university/pages/infinitescroll/infinitescroll.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    UniversityComponent,
    InfinitescrollComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    InfiniteScrollModule,
    NgxSpinnerModule
   
  ]
})
export class UniversityModule { }
