import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  getUnitCostOfWater() {
    const docRef = this.angularFS.doc(`Units/nwjrpjk3SaF6zfE2WYhr`);
    docRef.valueChanges().subscribe((docData: any) => {
      this.unitCostOfWater = docData.unitCost;
    });
    return this.unitCostOfWater;
  }
  getUnitCostOfElectricity() {
    const docRef = this.angularFS.doc(`Units/VaTEFMevPbnyWUb8O1XR`);
    docRef.valueChanges().subscribe((docData: any) => {
      this.unitCostOfElectricity = docData.unitCost;
    });
    return this.unitCostOfElectricity;
  }
}
