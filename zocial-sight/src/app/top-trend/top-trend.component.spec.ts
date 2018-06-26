import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WordCloudComponent}from './../word-cloud/word-cloud.component';
import { TopTrendComponent } from './top-trend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('TopTrendComponent', () => {
  let component: TopTrendComponent;
  let fixture: ComponentFixture<TopTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrendComponent ,WordCloudComponent],
        schemas: [ NO_ERRORS_SCHEMA],
          providers: [DatePipe],
        imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
