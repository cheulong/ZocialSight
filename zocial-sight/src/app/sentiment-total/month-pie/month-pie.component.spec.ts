import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPieComponent } from './month-pie.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('MonthPieComponent', () => {
  let component: MonthPieComponent;
  let fixture: ComponentFixture<MonthPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPieComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
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
