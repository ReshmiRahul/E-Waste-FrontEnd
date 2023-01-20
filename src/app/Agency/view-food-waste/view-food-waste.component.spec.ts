import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodWasteComponent } from './view-food-waste.component';

describe('ViewFoodWasteComponent', () => {
  let component: ViewFoodWasteComponent;
  let fixture: ComponentFixture<ViewFoodWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
