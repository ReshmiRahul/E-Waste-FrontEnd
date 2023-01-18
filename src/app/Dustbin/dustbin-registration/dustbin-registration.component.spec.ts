import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DustbinRegistrationComponent } from './dustbin-registration.component';

describe('DustbinRegistrationComponent', () => {
  let component: DustbinRegistrationComponent;
  let fixture: ComponentFixture<DustbinRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DustbinRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DustbinRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
