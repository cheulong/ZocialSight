import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewChild } from "@angular/core";

import { OppoMonthPieComponent } from './oppo-month-pie.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { BaseChartDirective } from "ng2-charts/ng2-charts";
import 'chart.js';
describe('OppoMonthPieComponent', () => {
  let component: OppoMonthPieComponent;
  let fixture: ComponentFixture<OppoMonthPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoMonthPieComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]

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
