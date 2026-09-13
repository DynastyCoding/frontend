import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLabComponent } from './mat-lab.component';

describe('MatLabComponent', () => {
  let component: MatLabComponent;
  let fixture: ComponentFixture<MatLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
