import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-for-the-client',
  templateUrl: './invoices-for-the-client.component.html',
  styleUrls: ['./invoices-for-the-client.component.css'],
})
export class InvoicesForTheClientComponent {
  constructor(private route: ActivatedRoute) {}
  tableHeaders: string = 'billsTable';
  isAddBillingModalHidden: boolean = true;
  clientId: number = 0;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
  }
  OnAddNewBillingClick = () => {
    this.isAddBillingModalHidden = false;
  };

  onModalDismiss = () => {
    this.isAddBillingModalHidden = true;
  };
}
