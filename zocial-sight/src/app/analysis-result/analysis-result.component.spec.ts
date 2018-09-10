import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AnalysisResultComponent } from "./analysis-result.component";
import { HttpClientModule } from "@angular/common/http";
import { TestService } from "./../test.service";

import { DatePipe } from "@angular/common";
import { of } from "rxjs/observable/of";
import { DebugElement } from "@angular/core";
describe("AnalysisResultComponent", () => {
  let component: AnalysisResultComponent;
  let fixture: ComponentFixture<AnalysisResultComponent>;
  let de: DebugElement;
  let service: TestService;
  let spy: jasmine.Spy;
  let spy1: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AnalysisResultComponent],
      providers: [DatePipe, TestService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisResultComponent);
    component = fixture.componentInstance;

    service = fixture.debugElement.injector.get(TestService);
    spy = spyOn(service, "getFBData").and.returnValue(
      of([
        {
          _id: { $oid: "5b227a7c1fcac90fc8289484" },
          id: "70067044168_10156526518254169",
          created_time: "2018-06-08T21:30:00+0000",
          message:
            "This summer, get a hug from the friendly Coca-Cola Polar Bear at #WorldofCocaCola. Purchase tickets at CokeURL.com/purchase.\n\nFan Friday Photo: @mariliaportom (via Instagram)",
          comments: [],
          engagement: [
            { Like: 51 },
            { Love: 2 },
            { Wow: 0 },
            { Haha: 2 },
            { Sad: 0 },
            { Angry: 0 },
            { Share: 3 }
          ],
          date1: { $date: 1528493400000 }
        }
      ])
    );

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getFBData and get array object", () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.tempLabel).toContain("06-08");
  });
  it("should call getFBData and get empty", () => {
 
    component.tempLabel = [];
    spy.and.returnValue(of([]));
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    fixture.detectChanges();
    expect(component.tempLabel.length).toBe(0);
  });
});
