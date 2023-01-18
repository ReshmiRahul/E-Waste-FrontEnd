import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIntersetedProductsComponent } from './view-interseted-products.component';

describe('ViewIntersetedProductsComponent', () => {
  let component: ViewIntersetedProductsComponent;
  let fixture: ComponentFixture<ViewIntersetedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIntersetedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIntersetedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
