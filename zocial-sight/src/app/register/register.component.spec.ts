import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from './../services/auth.service';
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent,DashboardComponent ],
      imports:[RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule],
          schemas: [ NO_ERRORS_SCHEMA],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
