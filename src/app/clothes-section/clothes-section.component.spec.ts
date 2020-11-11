import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesSectionComponent } from './clothes-section.component';

describe('ClothesSectionComponent', () => {
  let component: ClothesSectionComponent;
  let fixture: ComponentFixture<ClothesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
