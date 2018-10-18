import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveProductComponent } from './effective-product.component';

describe('EffectiveProductComponent', () => {
  let component: EffectiveProductComponent;
  let fixture: ComponentFixture<EffectiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectiveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
