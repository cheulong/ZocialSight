import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GeoDistributionComponent } from './geo-distribution.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {of} from 'rxjs/observable/of';
import { DebugElement }    from '@angular/core';
import {TestService} from "./../test.service";
describe('GeoDistributionComponent', () => {
  let component: GeoDistributionComponent;
  let fixture: ComponentFixture<GeoDistributionComponent>;
  let de: DebugElement;
let service:TestService;
let spy:jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
  providers: [DatePipe,TestService],
      declarations: [ GeoDistributionComponent ],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDistributionComponent);
    component = fixture.componentInstance;
    service=fixture.debugElement.injector.get(TestService);
    spy=spyOn(service,'getLocation').and.returnValue(of([{'city':'Bangkok','num':10},{'city':'Changwat Amnat Charoen','num':2},{'city':'Changwat Ang Thong','num':0}]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getLocation and get object location',()=>{
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.datas[0]['num']).toEqual(10);
expect(component.datas[0]['city']).toBe('Bangkok');
spy
  });
  it('should call getLocation and get empty',()=>{
    component.datas[0]['num']=0;
    service.getLocation=jasmine.createSpy().and.returnValue(of([{'city':'Bangkok','num':0},{'city':'Changwat Amnat Charoen','num':0},{'city':'Changwat Ang Thong','num':0}]));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.datas[0]['num']).toEqual(0);
expect(component.datas[0]['city']).toBe('Bangkok');
  });
});
