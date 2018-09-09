import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPieComponent } from './month-pie.component';

describe('MonthPieComponent', () => {
  let component: MonthPieComponent;
  let fixture: ComponentFixture<MonthPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
