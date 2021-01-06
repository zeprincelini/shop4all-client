import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyMaleComponent } from './baby-male.component';

describe('BabyMaleComponent', () => {
  let component: BabyMaleComponent;
  let fixture: ComponentFixture<BabyMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
