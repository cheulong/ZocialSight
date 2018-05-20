import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConverageComponent } from './post-converage.component';

describe('PostConverageComponent', () => {
  let component: PostConverageComponent;
  let fixture: ComponentFixture<PostConverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
