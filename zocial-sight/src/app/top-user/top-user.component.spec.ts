import { SentimentService } from "./../sentiment.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs/observable/of";

import { TopUserComponent } from "./top-user.component";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";

describe("TopUserComponent", () => {
  let component: TopUserComponent;
  let fixture: ComponentFixture<TopUserComponent>;
  let service: SentimentService;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopUserComponent],
      imports: [HttpClientModule],
      providers: [DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(SentimentService);
    spy = spyOn(service, "getTopUser").and.returnValue(
      of([
        {
          Id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Jonh",
          activities: 40
        },
        {
          Id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Nila",
          activities: 35
        }
      ])
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should return top user", () => {
    component.topUsers=[];
    component.getTopUser();
    expect(component.topUsers.length).toBe(2);
  });
});
