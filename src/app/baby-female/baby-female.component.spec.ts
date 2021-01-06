import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyFemaleComponent } from './baby-female.component';

describe('BabyFemaleComponent', () => {
  let component: BabyFemaleComponent;
  let fixture: ComponentFixture<BabyFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
