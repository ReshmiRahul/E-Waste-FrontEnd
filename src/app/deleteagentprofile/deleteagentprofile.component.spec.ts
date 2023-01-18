import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteagentprofileComponent } from './deleteagentprofile.component';

describe('DeleteagentprofileComponent', () => {
  let component: DeleteagentprofileComponent;
  let fixture: ComponentFixture<DeleteagentprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteagentprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteagentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
