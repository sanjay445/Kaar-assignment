import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlistdetailsComponent } from './foodlistdetails.component';

describe('FoodlistdetailsComponent', () => {
  let component: FoodlistdetailsComponent;
  let fixture: ComponentFixture<FoodlistdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodlistdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
