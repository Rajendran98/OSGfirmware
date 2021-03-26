import { TestBed } from '@angular/core/testing';

import { UpgradecommandService } from './upgradecommand.service';

describe('UpgradecommandService', () => {
  let service: UpgradecommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpgradecommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
