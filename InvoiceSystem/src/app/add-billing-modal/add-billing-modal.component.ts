import { Component, Input } from '@angular/core';
import { Bill } from '../interfaces/bill';
import { TableDataService } from '../services/table-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { CalculateTotalAmountService } from '../services/calculate-total-amount.service';

@Component({
  selector: 'app-add-billing-modal',
  templateUrl: './add-billing-modal.component.html',
  styleUrls: ['./add-billing-modal.component.css'],
})
export class AddBillingModalComponent {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private tableServices: TableDataService,
    private totalAmountService: CalculateTotalAmountService
  ) { }
  @Input()
  onModalDismiss!: () => void;
  @Input() isClientIdShown: boolean = true;
  @Input() isAddBillingModalHidden: boolean = true;
  Service: string = '';
  clientId = '';
  billingDetails!: Bill;
  totalAmount: number = 0;
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
    const billData = { ...this.billingDetails }; // assume this is the data for the new bill
    console.log(billData);
    this.totalAmountService.calculateTotalAmount(billData.Service, billData['Total units used'])
      .subscribe(totalAmount => {
        console.log(totalAmount);
        this.totalAmount = totalAmount;
      });
    this.firestore
      .collection<Bill>('bills')
      .add(billData)
      .then((docRef) => {
        const billId = docRef.id;
        console.log(`New bill added successfully with ID: ${billId}`);
        // update the bill document with the generated ID
        this.firestore
          .collection<Bill>('bills')
          .doc(billId)
          .update({ id: billId, 'Invoice Amount': this.totalAmount });
      })
      .catch((error) => {
        console.error('Error adding new bill: ', error);
      });
    //this.isAddBillingModalHidden = true;

  }

  /**
   * To do
   * add validations on the form
   */
}
