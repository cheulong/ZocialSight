import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAgeNameProductComponent } from './customer-age-name-product.component';

describe('CustomerAgeNameProductComponent', () => {
  let component: CustomerAgeNameProductComponent;
  let fixture: ComponentFixture<CustomerAgeNameProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAgeNameProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAgeNameProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
