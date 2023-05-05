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
  visible: boolean = false;
  onPay() {
    this.onClickPay.emit();
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 1000);
  }
}
