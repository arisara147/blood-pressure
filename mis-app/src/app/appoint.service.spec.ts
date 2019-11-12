import { TestBed } from '@angular/core/testing';

import { AppointService } from './appoint.service';

describe('AppointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointService = TestBed.get(AppointService);
    expect(service).toBeTruthy();
  });
});
