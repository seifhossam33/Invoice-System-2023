import { Component } from '@angular/core';
import { ServiceOffersService } from '../services/service-offers.service';
import { ServiceCardType } from '../types/telephoneTypes';

@Component({
  selector: 'app-telephone-services',
  templateUrl: './telephone-services.component.html',
  styleUrls: ['./telephone-services.component.css'],
})
export class TelephoneServicesComponent {
  constructor(private service: ServiceOffersService) {}

  serviceOffers: any[] = [];

  ngOnInit() {
    this.service
      .getAllServices()
      .subscribe((item) => (this.serviceOffers = item));
  }
}
