import { Component, OnInit } from '@angular/core';
import { UnitCostService } from 'src/app/services/unit-cost.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-unit-cost',
  templateUrl: './update-unit-cost.component.html',
  styleUrls: ['./update-unit-cost.component.css'],
})
export class UpdateUnitCostComponent implements OnInit {
  constructor(private UnitCostService: UnitCostService) {}
  waterUnitCost: number = 0;
  electricityUnitCost: number = 0;
  isAlertVisibleForWater: boolean = false;
  isAlertVisibleForElectricity: boolean = false;
  waterUnitCostFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+(\.\d{1,2})?$/)
  ]);
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
  updateWaterUnitCost() {
    this.UnitCostService.updateUnitCost(this.waterUnitCost, 'water');
    this.isAlertVisibleForWater = true;
    setTimeout(() => {
      this.isAlertVisibleForWater = false;
    }, 1000);
  }
  updateElectricityUnitCost() {
    this.UnitCostService.updateUnitCost(
      this.electricityUnitCost,
      'electricity'
    );
    this.isAlertVisibleForElectricity = true;
    setTimeout(() => {
      this.isAlertVisibleForElectricity = false;
    }, 1000);
  }
}
