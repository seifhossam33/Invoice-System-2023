import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../interfaces/bill';
@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private collection: AngularFirestoreCollection<Bill>;
  //private clients: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Bill>('bills');
  }
  readBills(): Observable<Bill[]> {
    return this.collection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  getBills(): Observable<any[]> {
    return this.readBills();
  }

  filterBills(clientId: string) {
    //  console.log('client id: ', clientId);
    return this.firestore
      .collection('bills', (ref) => ref.where('ClientID', '==', clientId))
      .valueChanges();
  }
  addBill(newBill: Bill): Promise<any> {
    return this.collection.add(newBill);
  }
  getBillWithPaymentMethod(paymentMethod: string, userId: string) {
    //  console.log('client id: ', clientId);
    return this.firestore
      .collection('bills', (ref) => ref.where('ClientID', '==', userId).where('paymentMethod', '==', paymentMethod))
      .valueChanges();
  }
}
