import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plate4Component } from './plate4.component';

describe('Plate4Component', () => {
  let component: Plate4Component;
  let fixture: ComponentFixture<Plate4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plate4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
