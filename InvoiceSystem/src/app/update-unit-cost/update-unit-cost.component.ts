import { Component } from '@angular/core';
import { UnitCostService } from 'src/app/services/unit-cost.service';

@Component({
  selector: 'app-update-unit-cost',
  templateUrl: './update-unit-cost.component.html',
  styleUrls: ['./update-unit-cost.component.css']
})
export class UpdateUnitCostComponent {

  constructor(private UnitCostService : UnitCostService ){}
  waterUnitCost: string=''; 
  electricityUnitCost: string=''; 

// todo update unit cost in services
updateWaterUnitCost()
{
  this.UnitCostService.updateUnitCost(parseInt(this.waterUnitCost),"water")


}
updateElectricityUnitCost()
{
  this.UnitCostService.updateUnitCost(parseInt(this.electricityUnitCost),"electricity")

}

}
