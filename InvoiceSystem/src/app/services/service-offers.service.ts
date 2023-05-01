import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceCardType } from '../types/telephoneTypes';

@Injectable({
  providedIn: 'root',
})
export class ServiceOffersService {
  constructor(private angularFS: AngularFirestore) {}

  addNewService(service: ServiceCardType) {
    return this.angularFS.collection('/ServiceOffers').add(service);
  }

  getAllServices() {
    return this.angularFS.collection('/ServiceOffers').valueChanges();
  }
}
