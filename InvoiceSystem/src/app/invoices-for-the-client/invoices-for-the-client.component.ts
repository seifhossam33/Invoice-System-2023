import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices-for-the-client',
  templateUrl: './invoices-for-the-client.component.html',
  styleUrls: ['./invoices-for-the-client.component.css']
})
export class InvoicesForTheClientComponent {
  showCheckboxColumn: boolean = false;
  tableHeaders: string = 'billsTable';
  // todo implement on add billing
  //  todo create a popup for adding billing
}
