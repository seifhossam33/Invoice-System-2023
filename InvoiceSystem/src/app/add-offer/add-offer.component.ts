import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OffersType, ServiceCardType } from '../types/telephoneTypes';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}
  @Input()
  onModalDismiss!: () => void;
  @Input() isAddOfferModalHidden: boolean = true;
  offerDetails!: OffersType;
  serviceId: string = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceId = params['id'];
    });
    this.offerDetails = {
      id: '',
      offerName: '',
      price: 0,
      totalUnits: 0,
    };
  }

  onAddOffer() {
    const newOffer = { ...this.offerDetails };
    console.log('New Offer', newOffer);
    console.log('service id: ', this.serviceId);
    const docRef = this.firestore.collection('ServiceOffers').doc(this.serviceId);
    //console.log(docRef)
    docRef.set({
      serviceOffers: firebase.firestore.FieldValue.arrayUnion(newOffer),
    }, { merge: true });
  }

  /**
   * To do
   * add validations on the form
   */
}
