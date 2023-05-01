import { Component, Input } from '@angular/core';
import { OffersType, ServiceCardType } from '../types/telephoneTypes';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css'],
})
export class OffersTableComponent {
  @Input() offersData!: OffersType[];
}
