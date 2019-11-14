import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointDetailPage } from './appoint-detail.page';

describe('AppointDetailPage', () => {
  let component: AppointDetailPage;
  let fixture: ComponentFixture<AppointDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
