import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { BillsToPayService } from '../services/bills-to-pay.service';
import { Bill } from '../interfaces/bill';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css'],
})
export class PendingPaymentsComponent {
  showCheckboxColumn: boolean = true;
  tableHeaders: string = 'billsTable';
  pendingPayments: boolean = true;

  // todo implement on pay method
  onPay() {
    const selectedBillsToPay = this.billsToPayService.selectedBillsToPay; 
    console.log(selectedBillsToPay);
    const currentDate = new Date();
    const fixedAmount = 50; 

    for (const bill of selectedBillsToPay) {
      const lastDate = new Date(bill['Last date']);
      if (lastDate < currentDate) {
        bill['Invoice Amount'] += fixedAmount; 
      }
    }

    this.router.navigate(['/pay']);
  }
  constructor(
    private dataService: DataService,
    private router: Router,
    private billsToPayService: BillsToPayService
     ) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
    
  }

  // todo displays bills with postpaid status get client id from routing
}
