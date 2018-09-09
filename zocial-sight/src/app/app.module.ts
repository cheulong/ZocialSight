import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule,ReactiveFormsModule,FormGroup} from '@angular/forms';
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
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { LoginRedirectService } from './services/login-redirect.service';
import { CustomFormsModule } from 'ng2-validation';
import {HttpModule} from '@angular/http';
import { UserListComponent } from './user-list/user-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SentimentPageComponent } from './sentiment-page/sentiment-page.component';
import { SentimentTotalComponent } from './sentiment-total/sentiment-total.component';
import { SentimentTableComponent } from './sentiment-table/sentiment-table.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { TopUserComponent } from './top-user/top-user.component';
import { TopNegTrendComponent } from './top-neg-trend/top-neg-trend.component';
import { WordCloudNegComponent } from './word-cloud-neg/word-cloud-neg.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { TotalPageViewComponent } from './total-page-view/total-page-view.component';
import { PageViewRevenueComponent } from './page-view-revenue/page-view-revenue.component';
import {NgPipesModule} from 'ngx-pipes';
import { WeekPieComponent } from './sentiment-total/week-pie/week-pie.component';
import { MonthPieComponent } from './sentiment-total/month-pie/month-pie.component';
import { TopOppoNegTrendComponent } from './top-oppo-neg-trend/top-oppo-neg-trend.component';
import { TopOppoPosTrendComponent } from './top-oppo-pos-trend/top-oppo-pos-trend.component';
import { OppoSentimentTotalComponent } from './oppo-sentiment-total/oppo-sentiment-total.component';
import { OppoSentimentTableComponent } from './oppo-sentiment-table/oppo-sentiment-table.component';
import { OppoWeekPieComponent } from './oppo-sentiment-total/oppo-week-pie/oppo-week-pie.component';
import { OppoMonthPieComponent } from './oppo-sentiment-total/oppo-month-pie/oppo-month-pie.component';
import { OppoWordCloudComponent } from './oppo-word-cloud/oppo-word-cloud.component';
import { OppoWordCloudNegComponent } from './oppo-word-cloud-neg/oppo-word-cloud-neg.component';
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
    RegisterComponent,
    UserListComponent,
    SearchPipe,
    EditUserComponent,
    SentimentPageComponent,
    SentimentTotalComponent,
    SentimentTableComponent,
    InfluencerComponent,
    TopUserComponent,
    TopNegTrendComponent,
    WordCloudNegComponent,
    TotalRevenueComponent,
    TotalPageViewComponent,
    PageViewRevenueComponent,
    WeekPieComponent,
    MonthPieComponent,
    TopOppoNegTrendComponent,
    TopOppoPosTrendComponent,
    OppoSentimentTotalComponent,
    OppoSentimentTableComponent,
    OppoWeekPieComponent,
    OppoMonthPieComponent,
    OppoWordCloudComponent,
    OppoWordCloudNegComponent

  ],
  imports: [
    NgPipesModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
    HttpModule,
    TagCloudModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DatePipe,AuthService,EnsureAuthenticatedService,LoginRedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
