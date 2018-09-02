import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentPageComponent } from './sentiment-page.component';

describe('SentimentPageComponent', () => {
  let component: SentimentPageComponent;
  let fixture: ComponentFixture<SentimentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
