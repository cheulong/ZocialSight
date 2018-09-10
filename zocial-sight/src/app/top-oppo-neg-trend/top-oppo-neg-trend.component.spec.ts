import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOppoNegTrendComponent } from './top-oppo-neg-trend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopOppoNegTrendComponent', () => {
  let component: TopOppoNegTrendComponent;
  let fixture: ComponentFixture<TopOppoNegTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOppoNegTrendComponent ],
      schemas: [ NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOppoNegTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
