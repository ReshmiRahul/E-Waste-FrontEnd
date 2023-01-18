import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAgencyComponent } from './confirm-agency.component';

describe('ConfirmAgencyComponent', () => {
  let component: ConfirmAgencyComponent;
  let fixture: ComponentFixture<ConfirmAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
