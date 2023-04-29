import { Component } from '@angular/core';
import { BillsToPayService } from '../services/bills-to-pay.service';
import { Bill } from '../interfaces/bill';

type PaymentMethod = 'visa' | 'cash';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css'],
})
export class PaymentWindowComponent {
  paymentMethod: PaymentMethod = 'visa';
  constructor(private billingServices: BillsToPayService) {}
  selectedBillsToPay: Bill[] = [];
  ngOnInit() {
    this.selectedBillsToPay = this.billingServices.selectedBillsToPay;
    console.log(this.selectedBillsToPay);
  }
  calcTotalAmountToPay(): number {
    let sum = 0;
    for (const bill of this.selectedBillsToPay) {
      sum += bill['Invoice Amount'];
    }
    return sum;
  }
}
