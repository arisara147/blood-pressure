import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressurePage } from './blood-pressure.page';

describe('BloodPressurePage', () => {
  let component: BloodPressurePage;
  let fixture: ComponentFixture<BloodPressurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPressurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPressurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
