import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueComponent } from './total-revenue.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('TotalRevenueComponent', () => {
  let component: TotalRevenueComponent;
  let fixture: ComponentFixture<TotalRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalRevenueComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
