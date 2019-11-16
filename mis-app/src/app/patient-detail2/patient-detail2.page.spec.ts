import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetail2Page } from './patient-detail2.page';

describe('PatientDetail2Page', () => {
  let component: PatientDetail2Page;
  let fixture: ComponentFixture<PatientDetail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetail2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
