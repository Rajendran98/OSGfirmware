import { TestBed } from '@angular/core/testing';

import { UploadJavaFirmwareService } from './upload-java-firmware.service';

describe('UploadJavaFirmwareService', () => {
  let service: UploadJavaFirmwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadJavaFirmwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
