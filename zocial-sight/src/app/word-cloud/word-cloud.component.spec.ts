import { SentimentService } from './../sentiment.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WordCloudComponent } from './word-cloud.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from "rxjs/observable/of";

describe('WordCloudComponent', () => {
  let component: WordCloudComponent;
  let fixture: ComponentFixture<WordCloudComponent>;
  let service: SentimentService;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudComponent ],
        schemas: [ NO_ERRORS_SCHEMA],
          imports:[HttpClientModule],
          providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(SentimentService);
    spy = spyOn(service, "getTopWord").and.returnValue(
      of({neg:[{text:'hate',number:50},
      {text:'bad',number:40},
      {text:'dislike',number:30}],
      pos:[{text:'love',number:50},
      {text:'good',number:40},
      {text:'best',number:30}]
      
     } 
        ));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
