import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesFemaleComponent } from './shoes-female.component';

describe('ShoesFemaleComponent', () => {
  let component: ShoesFemaleComponent;
  let fixture: ComponentFixture<ShoesFemaleComponent>;

  beforeEach(async(() => {
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
