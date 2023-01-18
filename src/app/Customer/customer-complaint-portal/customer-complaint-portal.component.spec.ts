import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComplaintPortalComponent } from './customer-complaint-portal.component';

describe('CustomerComplaintPortalComponent', () => {
  let component: CustomerComplaintPortalComponent;
  let fixture: ComponentFixture<CustomerComplaintPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComplaintPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComplaintPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
