import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceCardType } from '../types/telephoneTypes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-telephone-service',
  templateUrl: './add-telephone-service.component.html',
  styleUrls: ['./add-telephone-service.component.css'],
})
export class AddTelephoneServiceComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}
  @Input()
  onModalDismiss!: () => void;
  @Input() isAddServiceModalHidden: boolean = true;
  telephoneService!: ServiceCardType;
  serviceId: string = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceId = params['id'];
    });
    this.telephoneService = {
      id: '',
      serviceName: '',
      serviceOffers: [],
    };
  }
  onAddService() {
    const serviceData = { ...this.telephoneService };
    this.firestore
      .collection<ServiceCardType>('ServiceOffers')
      .add(serviceData)
      .then((docRef) => {
        const serviceId = docRef.id;
       // console.log(`New service added successfully with ID: ${serviceId}`);
        this.firestore
          .collection<ServiceCardType>('ServiceOffers')
          .doc(serviceId)
          .update({ id: serviceId });
      })
      .catch((error) => {
        console.error('Error adding new bill: ', error);
      });
    this.onModalDismiss();
  }
}
