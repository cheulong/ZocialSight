import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictProductComponent } from './predict-product.component';

describe('PredictProductComponent', () => {
  let component: PredictProductComponent;
  let fixture: ComponentFixture<PredictProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
