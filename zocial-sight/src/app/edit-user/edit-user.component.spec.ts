import { SearchPipe } from './../pipe/search.pipe';
import { UserListComponent } from './../user-list/user-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user.component';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DatePipe} from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {AuthService} from'../services/auth.service';
const appRoutes: Routes = [
  {path: 'users', component: UserListComponent}
];
describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserComponent,UserListComponent,SearchPipe ],
      imports:[RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },DatePipe,AuthService],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
