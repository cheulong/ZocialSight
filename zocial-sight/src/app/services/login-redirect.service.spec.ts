import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginRedirectService } from './login-redirect.service';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './../dashboard/dashboard.component';
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
describe('LoginRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],

        imports:[HttpClientModule,RouterModule.forRoot(appRoutes)],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },LoginRedirectService],
        schemas: [ NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([LoginRedirectService], (service: LoginRedirectService) => {
    expect(service).toBeTruthy();
  }));
});
