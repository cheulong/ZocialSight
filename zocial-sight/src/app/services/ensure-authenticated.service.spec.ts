import { TestBed, inject } from '@angular/core/testing';
import { EnsureAuthenticatedService } from './ensure-authenticated.service';
import {RouterModule, Routes} from '@angular/router';
import { MonthCardComponent } from './../month-card/month-card.component';
import { AnalysisResultComponent } from './../analysis-result/analysis-result.component';
import { PostConverageComponent } from './../post-converage/post-converage.component';
import { GenderComponent } from './../gender/gender.component';
import { GeoDistributionComponent } from './../geo-distribution/geo-distribution.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
describe('EnsureAuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ DashboardComponent,MonthCardComponent ,  AnalysisResultComponent,
          PostConverageComponent,
          GenderComponent,
          GeoDistributionComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },EnsureAuthenticatedService],
          schemas: [ NO_ERRORS_SCHEMA],
      imports:[RouterModule.forRoot(appRoutes)]
    });
  });

  it('should be created', inject([EnsureAuthenticatedService], (service: EnsureAuthenticatedService) => {
    expect(service).toBeTruthy();
  }));
});
