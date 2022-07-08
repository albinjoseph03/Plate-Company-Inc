import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plate1Component } from './plate1.component';

describe('Plate1Component', () => {
  let component: Plate1Component;
  let fixture: ComponentFixture<Plate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plate1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
