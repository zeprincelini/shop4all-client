import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchMaleComponent } from './watch-male.component';

describe('WatchMaleComponent', () => {
  let component: WatchMaleComponent;
  let fixture: ComponentFixture<WatchMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
