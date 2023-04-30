import { Component, Input } from '@angular/core';
import { Bill } from '../interfaces/bill';
import { TableDataService } from '../services/table-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-billing-modal',
  templateUrl: './add-billing-modal.component.html',
  styleUrls: ['./add-billing-modal.component.css'],
})
export class AddBillingModalComponent {
  constructor(private firestore: AngularFirestore) {}
  @Input()
  onModalDismiss!: () => void;
  @Input() isClientIdShown: boolean = true;
  @Input()
  clientId!: string;
  @Input() isAddBillingModalHidden: boolean = true;
  Service: string = '';
  billingDetails: Bill = {
    id: '',
    ClientID: this.clientId,
    Service: '',
    'Start date': new Date(),
    'Last date': new Date(),
    'Due Rate': '',
    'Total units used': 0,
    'Invoice Amount': 0,
    Status: 'Postpaid',
    isSelected: false,
  };
  addBillingDetails() {
    this.firestore.collection<Bill>('bills').add({ ...this.billingDetails });
  }

  /**
   * To do
   * close form when adding bill
   * add validations on the form
   */
}
