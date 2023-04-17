import { Component } from '@angular/core';

@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrls: ['./payments-history.component.css'],
})
export class PaymentsHistoryComponent {
  showCheckboxColumn: boolean = false;
  tableHeaders: string = 'billsTable';
}
