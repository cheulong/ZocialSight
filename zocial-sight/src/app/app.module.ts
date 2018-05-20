import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    GeoDistributionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
