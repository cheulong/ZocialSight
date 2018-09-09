import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPieComponent } from './week-pie.component';

describe('WeekPieComponent', () => {
  let component: WeekPieComponent;
  let fixture: ComponentFixture<WeekPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
