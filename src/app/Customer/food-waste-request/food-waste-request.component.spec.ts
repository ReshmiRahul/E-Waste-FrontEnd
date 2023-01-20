import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWasteRequestComponent } from './food-waste-request.component';

describe('FoodWasteRequestComponent', () => {
  let component: FoodWasteRequestComponent;
  let fixture: ComponentFixture<FoodWasteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodWasteRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodWasteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
