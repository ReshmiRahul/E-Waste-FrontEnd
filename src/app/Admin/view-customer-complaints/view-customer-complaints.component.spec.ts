import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerComplaintsComponent } from './view-customer-complaints.component';

describe('ViewCustomerComplaintsComponent', () => {
  let component: ViewCustomerComplaintsComponent;
  let fixture: ComponentFixture<ViewCustomerComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
