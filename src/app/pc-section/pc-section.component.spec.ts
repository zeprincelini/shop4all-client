import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcSectionComponent } from './pc-section.component';

describe('PcSectionComponent', () => {
  let component: PcSectionComponent;
  let fixture: ComponentFixture<PcSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
