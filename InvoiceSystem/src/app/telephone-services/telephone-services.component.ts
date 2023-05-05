import { Component, OnInit } from '@angular/core';
import { ServiceOffersService } from '../services/service-offers.service';

@Component({
  selector: 'app-telephone-services',
  templateUrl: './telephone-services.component.html',
  styleUrls: ['./telephone-services.component.css'],
})
export class TelephoneServicesComponent implements OnInit {
  constructor(private service: ServiceOffersService) {}

  serviceOffers: any[] = [];

  ngOnInit() {
    this.service
      .getAllServices()
      .subscribe((item) => (this.serviceOffers = item));
  }
}
