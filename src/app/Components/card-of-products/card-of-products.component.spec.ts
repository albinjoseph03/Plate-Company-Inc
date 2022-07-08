import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfProductsComponent } from './card-of-products.component';

describe('CardOfProductsComponent', () => {
  let component: CardOfProductsComponent;
  let fixture: ComponentFixture<CardOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOfProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
