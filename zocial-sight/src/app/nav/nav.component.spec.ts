import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { DashboardComponent } from './../dashboard/dashboard.component';
import {of} from 'rxjs/observable/of';
import { DebugElement }    from '@angular/core';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
    let de: DebugElement;
let spy:jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent,DashboardComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      imports:[RouterModule.forRoot(appRoutes),HttpClientModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },DatePipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let store={};
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    spy=spyOn(localStorage,'getItem').and.returnValue(of({'token':'foo'}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should call token',()=>{
  //   expect(spy).toHaveBeenCalled();
  //
  //   fixture.detectChanges();
  //   expect(localStorage.getItem('token')).toBe({'token':'foo'});
  //
  //
  // });
});
