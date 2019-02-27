import { TestBed } from '@angular/core/testing';

import { ConsultServiceService } from './consult-service.service';

describe('ConsultServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultServiceService = TestBed.get(ConsultServiceService);
    expect(service).toBeTruthy();
  });
});
