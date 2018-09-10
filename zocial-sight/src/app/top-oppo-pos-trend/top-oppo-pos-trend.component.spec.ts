import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOppoPosTrendComponent } from './top-oppo-pos-trend.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopOppoPosTrendComponent', () => {
  let component: TopOppoPosTrendComponent;
  let fixture: ComponentFixture<TopOppoPosTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOppoPosTrendComponent ],
      schemas: [ NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOppoPosTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
