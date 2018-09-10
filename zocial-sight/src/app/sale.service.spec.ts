import { TestBed, inject } from '@angular/core/testing';

import { SaleService } from './sale.service';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

describe('SaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleService,DatePipe],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([SaleService], (service: SaleService) => {
    expect(service).toBeTruthy();
  }));
});
