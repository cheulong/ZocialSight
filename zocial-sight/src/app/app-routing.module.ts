import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { SentimentPageComponent } from './sentiment-page/sentiment-page.component';
const routes: Routes = [
  { path: '', component: DashboardComponent,canActivate:
  [EnsureAuthenticatedService] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[EnsureAuthenticatedService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: EditUserComponent },
  { path: 'sentiment', component: SentimentPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
