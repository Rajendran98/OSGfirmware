import { TestBed } from '@angular/core/testing';

import { FmdashboardService } from './fmdashboard.service';

describe('FmdashboardService', () => {
  let service: FmdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
