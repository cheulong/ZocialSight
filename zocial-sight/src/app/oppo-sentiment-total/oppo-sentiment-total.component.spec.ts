import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoSentimentTotalComponent } from './oppo-sentiment-total.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OppoSentimentTotalComponent', () => {
  let component: OppoSentimentTotalComponent;
  let fixture: ComponentFixture<OppoSentimentTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoSentimentTotalComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe],
      schemas: [ NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoSentimentTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
