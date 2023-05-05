import { Component, OnInit } from '@angular/core';
import { UnitCostService } from 'src/app/services/unit-cost.service';

@Component({
  selector: 'app-update-unit-cost',
  templateUrl: './update-unit-cost.component.html',
  styleUrls: ['./update-unit-cost.component.css'],
})
export class UpdateUnitCostComponent implements OnInit {
  constructor(private UnitCostService: UnitCostService) {}
  waterUnitCost: number = 0;
  electricityUnitCost: number = 0;
  ngOnInit() {
    this.UnitCostService.getUnitCostOfWater().subscribe((unitCostOfWater) => {
      this.waterUnitCost = unitCostOfWater;
      console.log('Water unit cost:', unitCostOfWater);
    });

    this.UnitCostService.getUnitCostOfElectricity().subscribe(
      (unitCostOfElectricity) => {
        this.electricityUnitCost = unitCostOfElectricity;
        console.log('Electricity unit cost:', unitCostOfElectricity);
      }
    );
  }
  // todo update unit cost in services
  updateWaterUnitCost() {
    this.UnitCostService.updateUnitCost(this.waterUnitCost, 'water');
  }
  updateElectricityUnitCost() {
    this.UnitCostService.updateUnitCost(
      this.electricityUnitCost,
      'electricity'
    );
  }
}
