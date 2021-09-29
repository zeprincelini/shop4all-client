import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClothMaleComponent } from './cloth-male.component';

describe('ClothMaleComponent', () => {
  let component: ClothMaleComponent;
  let fixture: ComponentFixture<ClothMaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
