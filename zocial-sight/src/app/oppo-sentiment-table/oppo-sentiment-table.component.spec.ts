import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DatePipe} from '@angular/common';

import { OppoSentimentTableComponent } from './oppo-sentiment-table.component';
import {NgPipesModule} from 'ngx-pipes';
import {HttpClientModule} from '@angular/common/http';

describe('OppoSentimentTableComponent', () => {
  let component: OppoSentimentTableComponent;
  let fixture: ComponentFixture<OppoSentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoSentimentTableComponent ],
      imports:[NgPipesModule,HttpClientModule],
      providers: [DatePipe]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoSentimentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
