import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointEditPage } from './appoint-edit.page';

describe('AppointEditPage', () => {
  let component: AppointEditPage;
  let fixture: ComponentFixture<AppointEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
