import { TestBed } from '@angular/core/testing';

import { OutboundService } from './outbound.service';

describe('OutboundService', () => {
  let service: OutboundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutboundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
