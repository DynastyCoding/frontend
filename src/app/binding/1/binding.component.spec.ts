import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch1924Component } from './binding.component';

describe('Ch1924Component', () => {
  let component: Ch1924Component;
  let fixture: ComponentFixture<Ch1924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch1924Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
