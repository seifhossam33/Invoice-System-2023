import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-visa-method-window',
  templateUrl: './visa-method-window.component.html',
  styleUrls: ['./visa-method-window.component.css']
})
export class VisaMethodWindowComponent {
  @Input()
  calcTotalAmountToPay!: number;
  @Output() onClickPay = new EventEmitter<void>();

  onPay() {
    this.onClickPay.emit();
  }
}
