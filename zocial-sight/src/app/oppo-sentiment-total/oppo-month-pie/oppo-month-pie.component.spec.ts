import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoMonthPieComponent } from './oppo-month-pie.component';

describe('OppoMonthPieComponent', () => {
  let component: OppoMonthPieComponent;
  let fixture: ComponentFixture<OppoMonthPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoMonthPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoMonthPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
