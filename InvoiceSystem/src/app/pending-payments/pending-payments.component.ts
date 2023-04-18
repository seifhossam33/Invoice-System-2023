import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css'],
})
export class PendingPaymentsComponent {
  showCheckboxColumn: boolean = true;
  tableHeaders: string = 'billsTable';
  // todo implement on pay method
  constructor(private router: Router) {}
  onPay() {
    this.router.navigate(['/pay']);
  }
}
