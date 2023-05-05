import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cash-method-window',
  templateUrl: './cash-method-window.component.html',
  styleUrls: ['./cash-method-window.component.css'],
})
export class CashMethodWindowComponent {
  @Input()
  calcTotalAmountToPay!: number;
  @Output() onClickPay = new EventEmitter<void>();
  isAlertVisible: boolean = false;
  onPay() {
    this.onClickPay.emit();
    this.isAlertVisible = true;
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 1000);
  }
}
