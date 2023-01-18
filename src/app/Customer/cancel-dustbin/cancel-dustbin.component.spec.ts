import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDustbinComponent } from './cancel-dustbin.component';

describe('CancelDustbinComponent', () => {
  let component: CancelDustbinComponent;
  let fixture: ComponentFixture<CancelDustbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelDustbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelDustbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
