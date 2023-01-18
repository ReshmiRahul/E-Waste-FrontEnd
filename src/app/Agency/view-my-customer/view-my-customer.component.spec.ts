import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCustomerComponent } from './view-my-customer.component';

describe('ViewMyCustomerComponent', () => {
  let component: ViewMyCustomerComponent;
  let fixture: ComponentFixture<ViewMyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
