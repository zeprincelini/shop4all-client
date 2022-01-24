import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoesSectionComponent } from './shoes-section.component';

describe('ShoesSectionComponent', () => {
  let component: ShoesSectionComponent;
  let fixture: ComponentFixture<ShoesSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
