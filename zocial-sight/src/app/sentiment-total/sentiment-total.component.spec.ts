import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentTotalComponent } from './sentiment-total.component';

describe('SentimentTotalComponent', () => {
  let component: SentimentTotalComponent;
  let fixture: ComponentFixture<SentimentTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
