import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryFemaleComponent } from './jewellery-female.component';

describe('JewelleryFemaleComponent', () => {
  let component: JewelleryFemaleComponent;
  let fixture: ComponentFixture<JewelleryFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
