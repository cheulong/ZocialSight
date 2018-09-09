import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoSentimentTableComponent } from './oppo-sentiment-table.component';

describe('OppoSentimentTableComponent', () => {
  let component: OppoSentimentTableComponent;
  let fixture: ComponentFixture<OppoSentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoSentimentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoSentimentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
