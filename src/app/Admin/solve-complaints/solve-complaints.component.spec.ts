import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveComplaintsComponent } from './solve-complaints.component';

describe('SolveComplaintsComponent', () => {
  let component: SolveComplaintsComponent;
  let fixture: ComponentFixture<SolveComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
