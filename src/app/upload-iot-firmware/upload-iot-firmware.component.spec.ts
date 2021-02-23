import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIotFirmwareComponent } from './upload-iot-firmware.component';

describe('UploadIotFirmwareComponent', () => {
  let component: UploadIotFirmwareComponent;
  let fixture: ComponentFixture<UploadIotFirmwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadIotFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIotFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
