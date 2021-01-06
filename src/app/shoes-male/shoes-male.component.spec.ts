import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesMaleComponent } from './shoes-male.component';

describe('ShoesMaleComponent', () => {
  let component: ShoesMaleComponent;
  let fixture: ComponentFixture<ShoesMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
