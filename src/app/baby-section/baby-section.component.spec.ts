import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BabySectionComponent } from './baby-section.component';

describe('BabySectionComponent', () => {
  let component: BabySectionComponent;
  let fixture: ComponentFixture<BabySectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BabySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
