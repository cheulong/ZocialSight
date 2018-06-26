import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GenderComponent } from './gender.component';
import {HttpClientModule} from '@angular/common/http';
import {TestService} from "./../test.service";
import {DatePipe} from '@angular/common';
import {of} from 'rxjs/observable/of';
import { DebugElement }    from '@angular/core';
describe('GenderComponent', () => {
  let component: GenderComponent;
  let fixture: ComponentFixture<GenderComponent>;
  let de: DebugElement;
let service:TestService;
let spy:jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports:[HttpClientModule],
      declarations: [ GenderComponent ],
      providers: [DatePipe,TestService],
        schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderComponent);
    component = fixture.componentInstance;


    service=fixture.debugElement.injector.get(TestService);
    spy=spyOn(service,'getGender').and.returnValue(of({'male':1,'female':2}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getGender and get object gender',()=>{
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.temp['male']).toEqual(1);
    expect(component.temp['female']).toEqual(2);
  });
  it('should call getGender and get empty',()=>{
    component.temp={'male':0,'female':0};
    service.getGender=jasmine.createSpy().and.returnValue(of({'male':0,'female':0}));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.temp['male']).toEqual(0);
    expect(component.temp['female']).toEqual(0);
  });
});
