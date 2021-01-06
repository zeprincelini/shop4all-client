import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryMaleComponent } from './jewellery-male.component';

describe('JewelleryMaleComponent', () => {
  let component: JewelleryMaleComponent;
  let fixture: ComponentFixture<JewelleryMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
