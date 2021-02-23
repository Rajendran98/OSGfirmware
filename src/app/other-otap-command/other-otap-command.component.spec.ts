import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOTAPCommandComponent } from './other-otap-command.component';

describe('OtherOTAPCommandComponent', () => {
  let component: OtherOTAPCommandComponent;
  let fixture: ComponentFixture<OtherOTAPCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOTAPCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherOTAPCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
