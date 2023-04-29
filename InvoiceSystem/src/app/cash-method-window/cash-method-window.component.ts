import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cash-method-window',
  templateUrl: './cash-method-window.component.html',
  styleUrls: ['./cash-method-window.component.css'],
})
export class CashMethodWindowComponent {
  @Input()
  calcTotalAmountToPay!: number;
}
