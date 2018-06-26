import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { PostConverageComponent } from './post-converage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {of} from 'rxjs/observable/of';
import { DebugElement }    from '@angular/core';
import {TestService} from "./../test.service";
describe('PostConverageComponent', () => {
  let component: PostConverageComponent;
  let fixture: ComponentFixture<PostConverageComponent>;
  let de: DebugElement;
let service:TestService;
let spy:jasmine.Spy;
let spyTw:jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConverageComponent ],
      schemas: [ NO_ERRORS_SCHEMA],

      imports:[HttpClientModule,FormsModule],
        providers: [DatePipe,TestService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConverageComponent);
    component = fixture.componentInstance;

    service=fixture.debugElement.injector.get(TestService);
    spy=spyOn(service,'getFBData').and.returnValue(of([{"_id": {"$oid": "5b227a7c1fcac90fc8289484"}, "id": "70067044168_10156526518254169", "created_time": "2018-06-08T21:30:00+0000", "message": "This summer, get a hug from the friendly Coca-Cola Polar Bear at #WorldofCocaCola. Purchase tickets at CokeURL.com/purchase.\n\nFan Friday Photo: @mariliaportom (via Instagram)", "comments": [], "engagement": [{"Like": 51}, {"Love": 2}, {"Wow": 0}, {"Haha": 2}, {"Sad": 0}, {"Angry": 0}, {"Share": 3}], "date1": {"$date": 1528493400000}}]));
    spyTw=spyOn(service,'getTWData').and.returnValue(of([{"_id": {"$oid": "5b227e8e1fcac90fc828ca5c"},"id": 986312097314344960,"created_at": {"$date": "2018-04-17T18:35:03.000Z"},"text": "This way to pop culture paradise! Get your tickets today to #WorldofCocaCola today. https://t.co/w3OFrkvkVd https://t.co/nPfF6zTEaN","retweet_count": 2,"favorite_count":13 }]));
       fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call changeFbDate and get object post',()=>{
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.facebook).toEqual(1);


  });
  it('should call changeFbDate and get empty',()=>{
    component.facebook=0;
    service.getFBData=jasmine.createSpy().and.returnValue(of([{}]));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.facebook).toEqual(0);
  });

it('should call changeTwDate and get object tweet',()=>{
  expect(spyTw).toHaveBeenCalled();
  expect(spyTw.calls.all().length).toEqual(1);
  fixture.detectChanges();
  expect(component.twitter).toEqual(1);
});
it('should call changeTwDate and get empty',()=>{
component.twitter=0;
  service.getTWData=jasmine.createSpy().and.returnValue(of([{}]));
  expect(spyTw).toHaveBeenCalled();
  expect(spyTw.calls.all().length).toEqual(1);
  fixture.detectChanges();
  expect(component.twitter).toEqual(0);
});
});
