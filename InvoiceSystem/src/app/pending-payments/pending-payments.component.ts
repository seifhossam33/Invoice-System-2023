import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { BillsToPayService } from '../services/bills-to-pay.service';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css'],
})
export class PendingPaymentsComponent implements OnInit {
  showCheckboxColumn: boolean = true;
  tableHeaders: string = 'billsTable';
  pendingPayments: boolean = true;
  constructor(
    private dataService: DataService,
    private router: Router,
    private billsToPayService: BillsToPayService
  ) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
    console.log(this.billsToPayService.selectedBillsToPay);
  }
  onPay() {
    const selectedBillsToPay = this.billsToPayService.selectedBillsToPay;
    console.log(selectedBillsToPay);
    const currentDate = new Date();
    for (const bill of selectedBillsToPay) {
      const lastDate = new Date(bill['Last date']);
      if (lastDate < currentDate) {
        console.log(bill['Due Rate'] * bill['Invoice Amount']);
        bill['Invoice Amount'] += bill['Due Rate'] * bill['Invoice Amount'];
        console.log(bill['Invoice Amount']);
      }
    }
    this.router.navigate(['/pay']);
  }
}
