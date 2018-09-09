import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppoWordCloudNegComponent } from './oppo-word-cloud-neg.component';

describe('OppoWordCloudNegComponent', () => {
  let component: OppoWordCloudNegComponent;
  let fixture: ComponentFixture<OppoWordCloudNegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppoWordCloudNegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoWordCloudNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
