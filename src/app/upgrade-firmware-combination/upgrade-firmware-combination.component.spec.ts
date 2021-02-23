import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeFirmwareCombinationComponent } from './upgrade-firmware-combination.component';

describe('UpgradeFirmwareCombinationComponent', () => {
  let component: UpgradeFirmwareCombinationComponent;
  let fixture: ComponentFixture<UpgradeFirmwareCombinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeFirmwareCombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeFirmwareCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
