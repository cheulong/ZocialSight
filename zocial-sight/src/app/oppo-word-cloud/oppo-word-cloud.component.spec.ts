import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoWordCloudComponent } from './oppo-word-cloud.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

describe('OppoWordCloudComponent', () => {
  let component: OppoWordCloudComponent;
  let fixture: ComponentFixture<OppoWordCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoWordCloudComponent ],
      imports:[HttpClientModule],
      providers: [DatePipe]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoWordCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
