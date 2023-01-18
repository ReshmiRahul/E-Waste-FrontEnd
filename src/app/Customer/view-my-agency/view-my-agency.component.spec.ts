import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyAgencyComponent } from './view-my-agency.component';

describe('ViewMyAgencyComponent', () => {
  let component: ViewMyAgencyComponent;
  let fixture: ComponentFixture<ViewMyAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
