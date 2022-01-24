import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WatchFemaleComponent } from './watch-female.component';

describe('WatchFemaleComponent', () => {
  let component: WatchFemaleComponent;
  let fixture: ComponentFixture<WatchFemaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
