import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoesFemaleComponent } from './shoes-female.component';

describe('ShoesFemaleComponent', () => {
  let component: ShoesFemaleComponent;
  let fixture: ComponentFixture<ShoesFemaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
