import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCustomerComplaintsComponent } from './view-my-customer-complaints.component';

describe('ViewMyCustomerComplaintsComponent', () => {
  let component: ViewMyCustomerComplaintsComponent;
  let fixture: ComponentFixture<ViewMyCustomerComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCustomerComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCustomerComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
