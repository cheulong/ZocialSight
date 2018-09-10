import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentTotalComponent } from './sentiment-total.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('SentimentTotalComponent', () => {
  let component: SentimentTotalComponent;
  let fixture: ComponentFixture<SentimentTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentTotalComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get pos percentage', () => {
    expect(component.getPosSentiment({pos:[
      {
        Id: "5b580601c584d64cc47b2a4b",
        Created_at: "2018-06-08T20:23:00.000Z",
        name: "Alex",
        text: "It is good idea",
        sentiment: "pos"
      }],neg:
      [{
        id: "5b580601c584d64cc47b2a4b",
        Created_at: "2018-06-08T20:23:00.000Z",
        name: "Lisa",
        text: "bad service",
        sentiment: "neg"
      }
    ]}).length).toBe(1);
  });
  it('should get neg percentage', () => {
    expect(component.getNegSentiment({pos:[
      {
        Id: "5b580601c584d64cc47b2a4b",
        Created_at: "2018-06-08T20:23:00.000Z",
        name: "Alex",
        text: "It is good idea",
        sentiment: "pos"
      }],neg:
      [{
        id: "5b580601c584d64cc47b2a4b",
        Created_at: "2018-06-08T20:23:00.000Z",
        name: "Lisa",
        text: "bad service",
        sentiment: "neg"
      }
    ]}).length).toBe(1);
  });
});
