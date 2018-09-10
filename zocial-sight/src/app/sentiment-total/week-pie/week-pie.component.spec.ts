import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPieComponent } from './week-pie.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('WeekPieComponent', () => {
  let component: WeekPieComponent;
  let fixture: ComponentFixture<WeekPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPieComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
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
