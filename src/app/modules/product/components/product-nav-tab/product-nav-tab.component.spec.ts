import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavTabComponent } from './product-nav-tab.component';

describe('ProductNavTabComponent', () => {
  let component: ProductNavTabComponent;
  let fixture: ComponentFixture<ProductNavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
