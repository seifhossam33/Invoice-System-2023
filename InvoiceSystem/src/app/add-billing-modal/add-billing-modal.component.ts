import { Component, Input } from '@angular/core';
import { Bill } from '../interfaces/bill';
import { TableDataService } from '../services/table-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-billing-modal',
  templateUrl: './add-billing-modal.component.html',
  styleUrls: ['./add-billing-modal.component.css'],
})
export class AddBillingModalComponent {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private tableServices: TableDataService
  ) {}
  @Input()
  onModalDismiss!: () => void;
  @Input() isClientIdShown: boolean = true;
  @Input() isAddBillingModalHidden: boolean = true;
  Service: string = '';
  clientId = '';
  billingDetails!: Bill;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
    this.billingDetails = {
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
  }

  addBillingDetails() {
    console.log('data', this.billingDetails);
    this.firestore.collection<Bill>('bills').add({ ...this.billingDetails });
  }

  /**
   * To do
   * close form when adding bill
   * add validations on the form
   */
}
