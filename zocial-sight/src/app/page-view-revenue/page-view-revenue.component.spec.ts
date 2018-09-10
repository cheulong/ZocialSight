import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DatePipe} from '@angular/common';

import { PageViewRevenueComponent } from './page-view-revenue.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';

describe('PageViewRevenueComponent', () => {
  let component: PageViewRevenueComponent;
  let fixture: ComponentFixture<PageViewRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewRevenueComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
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
