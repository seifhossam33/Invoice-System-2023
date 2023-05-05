import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UnitCostService {
  constructor(private angularFS: AngularFirestore) {}
  unitCostOfWater: string = '';
  unitCostOfElectricity: string = '';
  updateUnitCost(newCost: number, type: string) {
    if (type == 'electricity') {
      const docId = 'VaTEFMevPbnyWUb8O1XR';
      this.angularFS
        .doc(`Units/${docId}`)
        .update({ unitCost: newCost })
        .then(() => alert('Success updating electricity unit cost!'))
        .catch((error) => console.error(error));
    } else if (type == 'water') {
      const docId = 'nwjrpjk3SaF6zfE2WYhr';
      this.angularFS
        .doc(`Units/${docId}`)
        .update({ unitCost: newCost })
        .then(() => alert('Success updating water unit cost!'))
        .catch((error) => console.error(error));
    } else {
      alert('could not update unit cost');
    }
  }
  getUnitCostOfWater(): Observable<number> {
    const docRef = this.angularFS.doc(`Units/nwjrpjk3SaF6zfE2WYhr`);
    return docRef.valueChanges().pipe(
      map((docData: any) => docData.unitCost)
    );
  }
  
  getUnitCostOfElectricity(): Observable<number> {
    const docRef = this.angularFS.doc(`Units/VaTEFMevPbnyWUb8O1XR`);
    return docRef.valueChanges().pipe(
      map((docData: any) => docData.unitCost)
    );
  }
}
