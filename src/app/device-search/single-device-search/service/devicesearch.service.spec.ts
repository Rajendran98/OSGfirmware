import { TestBed } from '@angular/core/testing';

import { DevicesearchService } from './devicesearch.service';

describe('DevicesearchService', () => {
  let service: DevicesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
