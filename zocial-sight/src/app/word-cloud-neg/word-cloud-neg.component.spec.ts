import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCloudNegComponent } from './word-cloud-neg.component';

describe('WordCloudNegComponent', () => {
  let component: WordCloudNegComponent;
  let fixture: ComponentFixture<WordCloudNegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudNegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
