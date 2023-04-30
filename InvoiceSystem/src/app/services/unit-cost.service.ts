import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UnitCostService {

  constructor(private angularFS: AngularFirestore) { }

  updateUnitCost(newCost: number, type: string) {
    if (type == "electricity") {
      const docId = 'VaTEFMevPbnyWUb8O1XR';
      this.angularFS.doc(`Units/${docId}`).update({ unitCost: newCost })
        .then(() => alert("Success updating electricity unit cost!"))
        .catch((error) => console.error(error));;


    }
    else if (type == "water") {
      const docId = 'nwjrpjk3SaF6zfE2WYhr';
      this.angularFS.doc(`Units/${docId}`).update({ unitCost: newCost })
        .then(() => alert("Success updating water unit cost!"))
        .catch((error) => console.error(error));;

    }
    else {
      alert("could not update unit cost");
    }
  }

}







