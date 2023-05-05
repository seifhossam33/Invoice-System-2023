import { Component, OnInit, Input } from '@angular/core';

import { ServiceOffersService } from '../services/service-offers.service';
import { ServiceCardType } from '../types/telephoneTypes';

@Component({
  selector: 'app-service-offers-card',
  templateUrl: './service-offers-card.component.html',
  styleUrls: ['./service-offers-card.component.css'],
})
export class ServiceOffersCardComponent implements OnInit {
  @Input() serviceCardData!: ServiceCardType;
  offersData: any = [];
  cardHeader = '';
  constructor(private service: ServiceOffersService) {}

  ngOnInit() {
    this.offersData = this.serviceCardData.serviceOffers;
    this.cardHeader = this.serviceCardData.serviceName;
  }
}
