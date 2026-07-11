import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOrderComponent } from './drink-order.component';

describe('DrinkOrderComponent', () => {
  let component: DrinkOrderComponent;
  let fixture: ComponentFixture<DrinkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
