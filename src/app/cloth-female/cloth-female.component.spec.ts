import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothFemaleComponent } from './cloth-female.component';

describe('ClothFemaleComponent', () => {
  let component: ClothFemaleComponent;
  let fixture: ComponentFixture<ClothFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
