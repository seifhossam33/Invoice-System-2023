import { Component } from '@angular/core';

type PaymentMethod = 'visa' | 'cash';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css'],
})
export class PaymentWindowComponent {
  paymentMethod: PaymentMethod = 'visa';
}
