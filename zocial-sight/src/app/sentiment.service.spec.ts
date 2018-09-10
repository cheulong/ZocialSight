import { TestBed, inject } from '@angular/core/testing';

import { SentimentService } from './sentiment.service';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('SentimentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentimentService,DatePipe],
      imports:[HttpClientModule]

    });
  });

  it('should be created', inject([SentimentService], (service: SentimentService) => {
    expect(service).toBeTruthy();
  }));
});
