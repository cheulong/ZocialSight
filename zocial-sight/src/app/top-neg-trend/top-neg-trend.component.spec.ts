import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNegTrendComponent } from './top-neg-trend.component';

describe('TopNegTrendComponent', () => {
  let component: TopNegTrendComponent;
  let fixture: ComponentFixture<TopNegTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNegTrendComponent ]
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
