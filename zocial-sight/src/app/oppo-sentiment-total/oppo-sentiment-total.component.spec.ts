import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoSentimentTotalComponent } from './oppo-sentiment-total.component';

describe('OppoSentimentTotalComponent', () => {
  let component: OppoSentimentTotalComponent;
  let fixture: ComponentFixture<OppoSentimentTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoSentimentTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoSentimentTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
