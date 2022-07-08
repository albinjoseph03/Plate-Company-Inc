import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plate3Component } from './plate3.component';

describe('Plate3Component', () => {
  let component: Plate3Component;
  let fixture: ComponentFixture<Plate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plate3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
