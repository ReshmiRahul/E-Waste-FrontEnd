import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCustomerRequestsComponent } from './view-my-customer-requests.component';

describe('ViewMyCustomerRequestsComponent', () => {
  let component: ViewMyCustomerRequestsComponent;
  let fixture: ComponentFixture<ViewMyCustomerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCustomerRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCustomerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
