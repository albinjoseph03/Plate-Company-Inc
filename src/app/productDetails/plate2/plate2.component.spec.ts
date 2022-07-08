import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plate2Component } from './plate2.component';

describe('Plate2Component', () => {
  let component: Plate2Component;
  let fixture: ComponentFixture<Plate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plate2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
