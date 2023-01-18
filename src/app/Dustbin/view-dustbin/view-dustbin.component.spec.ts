import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDustbinComponent } from './view-dustbin.component';

describe('ViewDustbinComponent', () => {
  let component: ViewDustbinComponent;
  let fixture: ComponentFixture<ViewDustbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDustbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDustbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
