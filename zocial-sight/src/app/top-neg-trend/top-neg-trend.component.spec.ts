import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNegTrendComponent } from './top-neg-trend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopNegTrendComponent', () => {
  let component: TopNegTrendComponent;
  let fixture: ComponentFixture<TopNegTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNegTrendComponent ],
      schemas: [ NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNegTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
