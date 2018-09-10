import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoWeekPieComponent } from './oppo-week-pie.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

describe('OppoWeekPieComponent', () => {
  let component: OppoWeekPieComponent;
  let fixture: ComponentFixture<OppoWeekPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoWeekPieComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
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
