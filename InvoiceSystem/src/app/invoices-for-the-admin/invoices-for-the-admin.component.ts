import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices-for-the-admin',
  templateUrl: './invoices-for-the-admin.component.html',
  styleUrls: ['./invoices-for-the-admin.component.css'],
})
export class InvoicesForTheAdminComponent {
  showCheckboxColumn: boolean = false;
  isAddBillingModalHidden: boolean = true;
  tableHeaders: string = 'billsTableWithClientID';

  OnAddNewBillingClick = () => {
    this.isAddBillingModalHidden = false;
  };

  onModalDismiss = () => {
    this.isAddBillingModalHidden = true;
  };
}
