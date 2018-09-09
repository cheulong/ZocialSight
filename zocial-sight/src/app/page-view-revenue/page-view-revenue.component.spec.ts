import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewRevenueComponent } from './page-view-revenue.component';

describe('PageViewRevenueComponent', () => {
  let component: PageViewRevenueComponent;
  let fixture: ComponentFixture<PageViewRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
