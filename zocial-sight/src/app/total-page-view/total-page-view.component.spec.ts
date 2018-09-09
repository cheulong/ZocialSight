import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPageViewComponent } from './total-page-view.component';

describe('TotalPageViewComponent', () => {
  let component: TotalPageViewComponent;
  let fixture: ComponentFixture<TotalPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
