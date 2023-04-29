import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-visa-method-window',
  templateUrl: './visa-method-window.component.html',
  styleUrls: ['./visa-method-window.component.css']
})
export class VisaMethodWindowComponent {
  @Input()
  calcTotalAmountToPay!: number;
}
