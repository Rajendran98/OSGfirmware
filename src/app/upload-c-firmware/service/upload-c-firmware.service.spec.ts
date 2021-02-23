import { TestBed } from '@angular/core/testing';

import { UploadCFirmwareService } from './upload-c-firmware.service';

describe('UploadCFirmwareService', () => {
  let service: UploadCFirmwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCFirmwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
