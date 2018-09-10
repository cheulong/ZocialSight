import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { SentimentTableComponent } from "./sentiment-table.component";
import { NgPipesModule } from "ngx-pipes";
import { HttpClientModule } from "@angular/common/http";

describe("SentimentTableComponent", () => {
  let component: SentimentTableComponent;
  let fixture: ComponentFixture<SentimentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentTableComponent],
      imports: [NgPipesModule, HttpClientModule],
      providers: [DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should return pos sentiment", () => {
    expect(
      component.findPosSentiment(  
      {pos:[
        {
          Id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Alex",
          text: "It is good idea",
          sentiment: "pos"
        }],neg:
        [{
          id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Lisa",
          text: "bad service",
          sentiment: "neg"
        }
      ]}).length
    ).toBe(1);
  });
  it("should return neg sentiment", () => {
    expect(
      component.findNegSentiment({pos:[
        {
          Id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Alex",
          text: "It is good idea",
          sentiment: "pos"
        }],neg:
        [{
          id: "5b580601c584d64cc47b2a4b",
          Created_at: "2018-06-08T20:23:00.000Z",
          name: "Lisa",
          text: "bad service",
          sentiment: "neg"
        }
      ]}).length
    ).toBe(1);
  });
});
