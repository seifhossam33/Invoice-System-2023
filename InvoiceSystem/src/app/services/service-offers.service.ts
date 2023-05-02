import { Injectable } from '@angular/core';
import { ServiceCardType } from '../types/telephoneTypes';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

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

  getServiceData(documentId: string): Observable<any> {
    const documentRef: AngularFirestoreDocument<any> = this.angularFS
      .collection('ServiceOffers')
      .doc(documentId);
    return documentRef.snapshotChanges().pipe(
      map((action) => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }
}
