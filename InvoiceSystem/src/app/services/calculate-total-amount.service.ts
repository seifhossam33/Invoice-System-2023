import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculateTotalAmountService {
  constructor(private firestore: AngularFirestore) {}
  getCostByType(type: string): Observable<number> {
    const collectionRef: AngularFirestoreCollection<any> =
      this.firestore.collection<any>('Units', (ref) =>
        ref.where('type', '==', type)
      );
    return collectionRef.valueChanges().pipe(
      map((documents) => {
        if (documents.length > 0) {
          return documents[0].unitCost;
        } else {
          return null;
        }
      })
    );
  }
  cost: number = 0;
  calculateTotalAmount(
    serviceType: string,
    totalUnitsUsed: number
  ): Observable<number> {
    return this.getCostByType(serviceType.toLowerCase()).pipe(
      map((cost) => {
        const totalAmount = totalUnitsUsed * cost;
        return totalAmount;
      })
    );
  }
}
