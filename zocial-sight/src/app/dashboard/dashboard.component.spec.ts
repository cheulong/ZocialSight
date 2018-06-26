import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthCardComponent } from './../month-card/month-card.component';
import { AnalysisResultComponent } from './../analysis-result/analysis-result.component';
import { PostConverageComponent } from './../post-converage/post-converage.component';
import { GenderComponent } from './../gender/gender.component';
import { GeoDistributionComponent } from './../geo-distribution/geo-distribution.component';
import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ DashboardComponent,
        MonthCardComponent,
        AnalysisResultComponent,
        PostConverageComponent,
        GenderComponent,
        GeoDistributionComponent ],
        schemas: [ NO_ERRORS_SCHEMA],
          providers: [DatePipe],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
