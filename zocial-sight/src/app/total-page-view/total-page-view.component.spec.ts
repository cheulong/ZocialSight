import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPageViewComponent } from './total-page-view.component';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
describe('TotalPageViewComponent', () => {
  let component: TotalPageViewComponent;
  let fixture: ComponentFixture<TotalPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPageViewComponent ],
      imports:[ChartsModule,HttpClientModule],
      providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
