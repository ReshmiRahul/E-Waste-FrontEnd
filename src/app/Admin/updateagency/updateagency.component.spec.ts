import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateagencyComponent } from './updateagency.component';

describe('UpdateagencyComponent', () => {
  let component: UpdateagencyComponent;
  let fixture: ComponentFixture<UpdateagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
