import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch2124Component } from './binding.component';

describe('Ch2124Component', () => {
  let component: Ch2124Component;
  let fixture: ComponentFixture<Ch2124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch2124Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch2124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
