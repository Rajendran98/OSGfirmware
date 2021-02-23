import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundStatusComponent } from './outbound-status.component';

describe('OutboundStatusComponent', () => {
  let component: OutboundStatusComponent;
  let fixture: ComponentFixture<OutboundStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
