import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFoodWasteComponent } from './register-food-waste.component';

describe('RegisterFoodWasteComponent', () => {
  let component: RegisterFoodWasteComponent;
  let fixture: ComponentFixture<RegisterFoodWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFoodWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFoodWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
