import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { TestService } from './test.service';
import {DatePipe} from '@angular/common';
describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService,DatePipe],
        imports:[HttpClientModule]

    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
