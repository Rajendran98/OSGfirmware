import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJavaFirmwareComponent } from './upload-java-firmware.component';

describe('UploadJavaFirmwareComponent', () => {
  let component: UploadJavaFirmwareComponent;
  let fixture: ComponentFixture<UploadJavaFirmwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadJavaFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJavaFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
