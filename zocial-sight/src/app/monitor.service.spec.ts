import { TestBed, inject } from '@angular/core/testing';
import {DatePipe} from '@angular/common';

import { MonitorService } from './monitor.service';
import {HttpClientModule} from '@angular/common/http';

describe('MonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitorService,DatePipe],
      imports:[HttpClientModule]

    });
  });

  it('should be created', inject([MonitorService], (service: MonitorService) => {
    expect(service).toBeTruthy();
  }));
});
