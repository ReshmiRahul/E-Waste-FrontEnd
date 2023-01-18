import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearedDustbinComponent } from './cleared-dustbin.component';

describe('ClearedDustbinComponent', () => {
  let component: ClearedDustbinComponent;
  let fixture: ComponentFixture<ClearedDustbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearedDustbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearedDustbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
