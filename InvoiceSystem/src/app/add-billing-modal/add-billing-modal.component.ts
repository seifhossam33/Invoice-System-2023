import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../interfaces/bill';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { CalculateTotalAmountService } from '../services/calculate-total-amount.service';
import { ServiceOffersService } from '../services/service-offers.service';
import { OffersType } from '../types/telephoneTypes';

@Component({
  selector: 'app-add-billing-modal',
  templateUrl: './add-billing-modal.component.html',
  styleUrls: ['./add-billing-modal.component.css'],
})
export class AddBillingModalComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private totalAmountService: CalculateTotalAmountService,
    private serviceOffers: ServiceOffersService
  ) {}
  @Input()
  onModalDismiss!: () => void;
  @Input() isClientIdShown: boolean = true;
  @Input() isAddBillingModalHidden: boolean = true;
  Service: string = 'Electricity';
  clientId = '';
  billingDetails!: Bill;
  totalAmount: number = 0;
  services: any[] = [];
  offers: any[] = [];
  selectedServiceOffers!: OffersType[];
  selectedOfferUnits: number = -1;
  selectedOfferPrice!: number;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
    this.billingDetails = {
      id: '',
      ClientID: this.clientId,
      Service: 'Electricity',
      'Start date': new Date(),
      'Last date': new Date(),
      'Due Rate': '',
      'Total units used': 0,
      'Service Offer': 'No Service',
      Offer: 'No Offer',
      'Invoice Amount': 0,
      Status: 'Postpaid',
      isSelected: false,
    };
    this.serviceOffers.getAllServices().subscribe((item) => {
      this.services = item;
    });
  }
  addBillingDetails() {
    const billData = { ...this.billingDetails }; // assume this is the data for the new bill
    if (this.billingDetails['Service'] === 'Telephone') {
      this.totalAmount = this.selectedOfferPrice;
      // console.log(this.totalAmount);
    } else {
      this.totalAmountService
        .calculateTotalAmount(billData.Service, billData['Total units used'])
        .subscribe((totalAmount) => {
          // console.log(totalAmount);
          this.totalAmount = totalAmount;
        });
    }
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
    this.onModalDismiss();
  }

  onServiceOptionSelected($event: any) {
    this.selectedServiceOffers = this.services.find(
      (option) => option.serviceName === $event.target.value
    ).serviceOffers;
    console.log(this.selectedServiceOffers);
  }

  onOfferSelect() {
    const selectedOffer = this.selectedServiceOffers.find(
      (offer) => offer.offerName === this.billingDetails['Offer']
    );
    if (selectedOffer) {
      this.selectedOfferUnits = selectedOffer.totalUnits;
      this.selectedOfferPrice = selectedOffer.price;
      // console.log(this.selectedOfferUnits,    this.selectedOfferPrice)
    }
  }
}
