import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCustomerComponent } from './confirm-customer.component';

describe('ConfirmCustomerComponent', () => {
  let component: ConfirmCustomerComponent;
  let fixture: ComponentFixture<ConfirmCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
