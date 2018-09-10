import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoWordCloudNegComponent } from './oppo-word-cloud-neg.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

describe('OppoWordCloudNegComponent', () => {
  let component: OppoWordCloudNegComponent;
  let fixture: ComponentFixture<OppoWordCloudNegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoWordCloudNegComponent ],
      imports:[HttpClientModule],
      providers: [DatePipe]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoWordCloudNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
