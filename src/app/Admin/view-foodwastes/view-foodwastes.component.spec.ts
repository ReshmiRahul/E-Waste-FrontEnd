import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodwastesComponent } from './view-foodwastes.component';

describe('ViewFoodwastesComponent', () => {
  let component: ViewFoodwastesComponent;
  let fixture: ComponentFixture<ViewFoodwastesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodwastesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodwastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
