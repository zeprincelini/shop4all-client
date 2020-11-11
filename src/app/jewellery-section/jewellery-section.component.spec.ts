import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewellerySectionComponent } from './jewellery-section.component';

describe('JewellerySectionComponent', () => {
  let component: JewellerySectionComponent;
  let fixture: ComponentFixture<JewellerySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewellerySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewellerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
