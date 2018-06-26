import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EnsureAuthenticated } from './services/ensure-authenticated.service';
const routes: Routes = [
  { path: '', component: DashboardComponent,canActivate:
  [EnsureAuthenticated] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[EnsureAuthenticated] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
