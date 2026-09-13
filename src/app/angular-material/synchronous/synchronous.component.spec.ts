import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronousComponent } from './synchronous.component';

describe('SynchronousComponent', () => {
  let component: SynchronousComponent;
  let fixture: ComponentFixture<SynchronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynchronousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
