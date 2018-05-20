import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDistributionComponent } from './geo-distribution.component';

describe('GeoDistributionComponent', () => {
  let component: GeoDistributionComponent;
  let fixture: ComponentFixture<GeoDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
