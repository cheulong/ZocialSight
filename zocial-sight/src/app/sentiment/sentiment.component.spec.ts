import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { SentimentComponent } from './sentiment.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { of } from "rxjs/observable/of";
import { SentimentService } from '../sentiment.service';

describe('SentimentComponent', () => {
  let component: SentimentComponent;
  let fixture: ComponentFixture<SentimentComponent>;
  let service: SentimentService;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentComponent ],
      imports:[ChartsModule,HttpClientModule],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [DatePipe]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(SentimentService);
   
    spy = spyOn(service, "getSentiment").and.returnValue(
      of([{
        "_id": {
            "$oid": "5b580601c584d64cc47b2a4b"
        },
        "created_at": {
            "$date": "2018-06-03T20:23:00.000Z"
        },
        "name": "สมาชิกหมายเลข 4589387",
        "text": "\n",
        "sentiment": "neg"
    },{
      "_id": {
          "$oid": "5b580601c584d64cc47b2a4d"
      },
      "created_at": {
          "$date": "2018-05-10T20:21:32.000Z"
      },
      "name": "อ๊อดแอด ณ เมืองโอ่ง",
      "text": "\r\n\t\t\t\t\t\t\t\tงูอะไรครับ ตามภาพ ขอความรู้หน่อยครับ ",
      "sentiment": "pos"
  }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
