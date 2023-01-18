import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerprofileComponent } from './viewcustomerprofile.component';

describe('ViewcustomerprofileComponent', () => {
  let component: ViewcustomerprofileComponent;
  let fixture: ComponentFixture<ViewcustomerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcustomerprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcustomerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
