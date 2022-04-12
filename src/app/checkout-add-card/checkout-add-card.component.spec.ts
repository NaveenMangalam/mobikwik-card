import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAddCardComponent } from './checkout-add-card.component';

describe('CheckoutAddCardComponent', () => {
  let component: CheckoutAddCardComponent;
  let fixture: ComponentFixture<CheckoutAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
