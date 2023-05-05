import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOffersService } from '../services/service-offers.service';
@Component({
  selector: 'app-telephone-services-for-admin',
  templateUrl: './telephone-services-for-admin.component.html',
  styleUrls: ['./telephone-services-for-admin.component.css'],
})
export class TelephoneServicesForAdminComponent implements OnInit{
  constructor(
    private router: Router,
    private serviceOffers: ServiceOffersService
  ) {}

  services: any[] = [];
  isAddServiceModalHidden: boolean = true;

  ngOnInit() {
    this.serviceOffers
      .getAllServices()
      .subscribe((items) => (this.services = items));
    console.log('All Services', this.services);
  }
  onShowService(serviceId: string) {
    // console.log(clientId);
    this.router.navigate(['/serviceDetails', serviceId]);
  }
  OnAddNewServiceClick() {
    this.isAddServiceModalHidden = false;
  }
  onModalDismiss = () => {
    this.isAddServiceModalHidden = true;
  };
}
