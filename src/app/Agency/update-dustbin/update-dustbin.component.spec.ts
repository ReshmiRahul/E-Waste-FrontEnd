import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDustbinComponent } from './update-dustbin.component';

describe('UpdateDustbinComponent', () => {
  let component: UpdateDustbinComponent;
  let fixture: ComponentFixture<UpdateDustbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDustbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDustbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
