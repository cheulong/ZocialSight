import { EditUserComponent } from "./../edit-user/edit-user.component";
import { SearchPipe } from "./../pipe/search.pipe";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { AuthService } from "../services/auth.service";
import { CustomFormsModule } from "ng2-validation";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs/observable/of";

import { UserListComponent } from "./user-list.component";
import { UserService } from "../user.service";
const appRoutes: Routes = [
  { path: "user/:username", component: EditUserComponent }
];

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: UserService;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, SearchPipe, EditUserComponent],
      imports: [
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule,
        CustomFormsModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }, AuthService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(UserService);
    spy = spyOn(service, "getUsers").and.returnValue(
      of([{
        id: "001",
        username: "staff",
        firstname: "staff",
        surname: "staff",
        address: "sfsfs",
        email: "staff@gmail.com",
        phone: "2242343",
        question: " What is your favorite sport? ",
        answer: "soccer",
        statue: "Staff"}
      ]))
  });


  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should find staff", () => {
    expect(
      component.findStaff([{ name: "Long", statue: " Staff " }]).length
    ).toBe(1);
    expect(
      component.findStaff([{ name: "Long", statue: " Product Owner " }]).length
    ).toBe(0);
  });
  it("should find product owner", () => {
    expect(
      component.findOwner([{ name: "Long", statue: " Staff " }]).length
    ).toBe(0);
    expect(
      component.findOwner([{ name: "Long", statue: " Product Owner " }]).length
    ).toBe(1);
  });
  it("should remove user", () => {
    component.users = [
      {
        id: "001",
        username: "staff",
        firstname: "staff",
        surname: "staff",
        address: "sfsfs",
        email: "staff@gmail.com",
        phone: "2242343",
        question: " What is your favorite sport? ",
        answer: "soccer",
        statue: "Staff"
      }
    ];
    expect(component.users.length).toBe(1);
    component.remove({
      id: "001",
      username: "staff",
      firstname: "staff",
      surname: "staff",
      address: "sfsfs",
      email: "staff@gmail.com",
      phone: "2242343",
      question: " What is your favorite sport? ",
      answer: "soccer",
      statue: "Staff"
    });

    expect(component.users.length).toBe(0);
  });
  it("should get user", () => {
    component.users = [
    ];
    expect(component.users.length).toBe(0);
    component.getUsers();

    expect(component.users.length).toBe(1);
  });
});
