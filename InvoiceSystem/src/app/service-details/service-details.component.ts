import { Component } from '@angular/core';
import { ServiceOffersService } from '../services/service-offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent {
  constructor(private service: ServiceOffersService,  private route: ActivatedRoute) {}

  serviceOffers: any[] = [];
  isAddOfferModalHidden: boolean = true;
  serviceId: string = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceId = params['id'];
    });
  }
  OnAddNewOfferClick() {
    this.isAddOfferModalHidden = false;
  }
  onModalDismiss = () => {
    this.isAddOfferModalHidden = true;
  };
}
