import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentTableComponent } from './sentiment-table.component';

describe('SentimentTableComponent', () => {
  let component: SentimentTableComponent;
  let fixture: ComponentFixture<SentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
