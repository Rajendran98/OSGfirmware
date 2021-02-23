import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareReportComponent } from './firmware-report.component';

describe('FirmwareReportComponent', () => {
  let component: FirmwareReportComponent;
  let fixture: ComponentFixture<FirmwareReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
