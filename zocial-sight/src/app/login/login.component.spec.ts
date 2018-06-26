import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { CustomFormsModule } from 'ng2-validation';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
import {APP_BASE_HREF} from '@angular/common';
import { AuthService } from './../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import { DebugElement }    from '@angular/core';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
describe('LoginComponent', () => {
  let component: LoginComponent;
  let de: DebugElement;
let service:AuthService;
let spy:jasmine.Spy;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,

      DashboardComponent ],
      imports:[ FormsModule,
          CustomFormsModule,
          HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },
    AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service=fixture.debugElement.injector.get(AuthService);
    spy=spyOn(service,'reset').and.returnValue(of({'message':'resetted password'}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should return success message', () => {
  //   expect(spy).toHaveBeenCalled();
  //   expect(spy.calls.all().length).toEqual(1);
  //   fixture.detectChanges();
  //   expect(component.errorMessageInReset).toBe('resetted password');
  // });
});
