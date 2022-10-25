import { TestBed } from '@angular/core/testing';

import { ProphecyService } from './prophecy.service';

describe('ProphecyService', () => {
  let service: ProphecyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProphecyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
