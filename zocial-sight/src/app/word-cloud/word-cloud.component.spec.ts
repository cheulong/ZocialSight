import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WordCloudComponent } from './word-cloud.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('WordCloudComponent', () => {
  let component: WordCloudComponent;
  let fixture: ComponentFixture<WordCloudComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
