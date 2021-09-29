import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JewelleryMaleComponent } from './jewellery-male.component';

describe('JewelleryMaleComponent', () => {
  let component: JewelleryMaleComponent;
  let fixture: ComponentFixture<JewelleryMaleComponent>;

  beforeEach(waitForAsync(() => {
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
