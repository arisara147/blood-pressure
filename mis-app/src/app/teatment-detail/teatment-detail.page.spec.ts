import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatmentDetailPage } from './teatment-detail.page';

describe('TeatmentDetailPage', () => {
  let component: TeatmentDetailPage;
  let fixture: ComponentFixture<TeatmentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatmentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
