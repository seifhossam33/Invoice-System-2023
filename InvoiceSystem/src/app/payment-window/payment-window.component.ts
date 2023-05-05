import { Component, OnInit } from '@angular/core';
import { BillsToPayService } from '../services/bills-to-pay.service';
import { Bill } from '../interfaces/bill';
import { AngularFirestore } from '@angular/fire/compat/firestore';

type PaymentMethod = 'visa' | 'cash';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css'],
})
export class PaymentWindowComponent implements OnInit {
  paymentMethod: PaymentMethod = 'visa';
  constructor(
    private billingServices: BillsToPayService,
    private angularFS: AngularFirestore,
    private billingService: BillsToPayService
  ) {}
  selectedBillsToPay: Bill[] = [];
  ngOnInit() {
    this.selectedBillsToPay = this.billingServices.selectedBillsToPay;
    // console.log('selected bills to pay', this.selectedBillsToPay);
  }
  calcTotalAmountToPay(): number {
    let sum = 0;
    for (const bill of this.selectedBillsToPay) {
      sum += bill['Invoice Amount'];
    }
    return sum;
  }
  // todo onPay update status to paid to display it in payments history
  updatePaymentStatus() {
    for (const bill of this.selectedBillsToPay) {
      // console.log('bill', bill);
      const invoiceRef = this.angularFS.collection('bills').doc(bill.id);
      invoiceRef
        .update({ Status: 'Paid' })
        .then(() => console.log('Status updated successfully'))
        .catch((error) => console.log(error));
      const index = this.billingService.selectedBillsToPay.indexOf(bill);
      if (index !== -1) {
        this.billingService.selectedBillsToPay.splice(index, 1);
      }
    }
  }
}
