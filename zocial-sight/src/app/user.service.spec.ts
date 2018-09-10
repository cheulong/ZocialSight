import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports:[HttpClientModule]

    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  it('should get user', inject([UserService], (service: UserService) => {
    service.getUsers().subscribe(res=>{
      expect(res).toContain('admin');
    })
  }));
});
