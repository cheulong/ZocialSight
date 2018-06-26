import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthCardComponent } from './month-card/month-card.component';
import { PostConverageComponent } from './post-converage/post-converage.component';
import { AnalysisResultComponent } from './analysis-result/analysis-result.component';
import {MaterialModule} from './material.module';
import { ChartsModule } from 'ng2-charts';
import { TopTrendComponent } from './top-trend/top-trend.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { GenderComponent } from './gender/gender.component';
import { GeoDistributionComponent } from './geo-distribution/geo-distribution.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import {DatePipe} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';

import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { CustomFormsModule } from 'ng2-validation';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    AnalysisResultComponent,
    MonthCardComponent,
    PostConverageComponent,
    TopTrendComponent,
    SentimentComponent,
    GenderComponent,
    GeoDistributionComponent,
    WordCloudComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    HttpModule,
    TagCloudModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DatePipe,AuthService,EnsureAuthenticated,LoginRedirect],
  bootstrap: [AppComponent]
})
export class AppModule { }
