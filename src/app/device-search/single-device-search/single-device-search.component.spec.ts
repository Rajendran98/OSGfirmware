import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceSearchComponent } from './single-device-search.component';

describe('SingleDeviceSearchComponent', () => {
  let component: SingleDeviceSearchComponent;
  let fixture: ComponentFixture<SingleDeviceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDeviceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
