import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoWeekPieComponent } from './oppo-week-pie.component';

describe('OppoWeekPieComponent', () => {
  let component: OppoWeekPieComponent;
  let fixture: ComponentFixture<OppoWeekPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoWeekPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoWeekPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
