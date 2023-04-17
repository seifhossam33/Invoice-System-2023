import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css'],
})
export class PendingPaymentsComponent {
  showCheckboxColumn: boolean = true;
  tableHeaders: string = 'billsTable';
  // todo implement on pay method
  onPay() {}
}
