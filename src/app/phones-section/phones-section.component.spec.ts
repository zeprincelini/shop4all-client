import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesSectionComponent } from './phones-section.component';

describe('PhonesSectionComponent', () => {
  let component: PhonesSectionComponent;
  let fixture: ComponentFixture<PhonesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
