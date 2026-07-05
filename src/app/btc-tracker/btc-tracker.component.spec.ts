import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcTrackerComponent } from './btc-tracker.component';

describe('BtcTrackerComponent', () => {
  let component: BtcTrackerComponent;
  let fixture: ComponentFixture<BtcTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtcTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
