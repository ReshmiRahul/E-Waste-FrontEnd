import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodWasteComponent } from './delete-food-waste.component';

describe('DeleteFoodWasteComponent', () => {
  let component: DeleteFoodWasteComponent;
  let fixture: ComponentFixture<DeleteFoodWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFoodWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFoodWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
