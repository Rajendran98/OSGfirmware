import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCFirmwareComponent } from './upload-c-firmware.component';

describe('UploadCFirmwareComponent', () => {
  let component: UploadCFirmwareComponent;
  let fixture: ComponentFixture<UploadCFirmwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
