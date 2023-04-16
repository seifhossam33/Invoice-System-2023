import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWindowComponent } from './payment-window.component';

describe('PaymentWindowComponent', () => {
  let component: PaymentWindowComponent;
  let fixture: ComponentFixture<PaymentWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
