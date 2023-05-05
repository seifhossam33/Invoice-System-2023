import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-for-the-client',
  templateUrl: './invoices-for-the-client.component.html',
  styleUrls: ['./invoices-for-the-client.component.css'],
})
export class InvoicesForTheClientComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  tableHeaders: string = 'billsTable';
  isAddBillingModalHidden: boolean = true;
  clientId: string = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
  }
  OnAddNewBillingClick = () => {
    //  console.log('clientID: ', this.clientId);
    this.isAddBillingModalHidden = false;
  };

  onModalDismiss = () => {
    this.isAddBillingModalHidden = true;
  };
}
