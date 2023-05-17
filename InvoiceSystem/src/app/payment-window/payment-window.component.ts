import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillsToPayService } from '../services/bills-to-pay.service';
import { Bill } from '../interfaces/bill';
import { AngularFirestore } from '@angular/fire/compat/firestore';

type PaymentMethod = 'visa' | 'cash';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css'],
})
export class PaymentWindowComponent implements OnInit, OnDestroy {
  paymentMethod: PaymentMethod = 'visa';
  constructor(
    private billingServices: BillsToPayService,
    private angularFS: AngularFirestore,
    private billingService: BillsToPayService
  ) {}
  selectedBillsToPay: Bill[] = [];
  selectedBillsToDelete: number[] = [];
  arr: Bill[] = [];
  sum = 0;
  ngOnInit() {
    this.selectedBillsToPay = this.billingServices.selectedBillsToPay;
    // console.log('selected bills to pay', this.selectedBillsToPay);
    for (const bill of this.selectedBillsToPay) {
      // console.log('bill invoice amount: ', bill['Invoice Amount']);
      this.sum += bill['Invoice Amount'];
    }
  }
  ngOnDestroy() {
    this.billingServices.selectedBillsToPay = [];
    this.sum = 0;
  }
  calcTotalAmountToPay(): number {
    return this.sum;
  }
  updatePaymentStatus() {
      for (const bill of this.selectedBillsToPay) {
      const invoiceRef = this.angularFS.collection('bills').doc(bill.id);
      invoiceRef
        .update({ Status: 'Paid' })
        .then(() => console.log('Status updated successfully'))
        .catch((error) => console.log(error));
      const index = this.billingService.selectedBillsToPay.indexOf(bill);
      this.selectedBillsToDelete.push(index);
    }
    for (const idx of this.selectedBillsToDelete) {
      if (idx !== -1) {
        this.billingService.selectedBillsToPay.splice(idx, 1);
      }
    }
    this.sum = 0;
  }
}
