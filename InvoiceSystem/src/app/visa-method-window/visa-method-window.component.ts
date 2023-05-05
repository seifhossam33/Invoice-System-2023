import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisaPaymentType } from '../types/paymentTypes';
@Component({
  selector: 'app-visa-method-window',
  templateUrl: './visa-method-window.component.html',
  styleUrls: ['./visa-method-window.component.css'],
})
export class VisaMethodWindowComponent {
  @Input()
  calcTotalAmountToPay!: number;
  @Output() onClickPay = new EventEmitter<void>();

  visaPaymentDetails!: VisaPaymentType;

  ngOnInit() {
    this.visaPaymentDetails = {
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvc: null,
    };
  }
  isAlertVisible: boolean = false;
  onPay() {
    this.onClickPay.emit();
    this.isAlertVisible = true;
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 1000);
  }
}
