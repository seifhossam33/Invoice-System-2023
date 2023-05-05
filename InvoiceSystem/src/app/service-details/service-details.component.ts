import { Component, OnInit } from '@angular/core';
import { ServiceOffersService } from '../services/service-offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  constructor(
    private service: ServiceOffersService,
    private route: ActivatedRoute
  ) {}

  serviceOffers: any[] = [];
  isAddOfferModalHidden: boolean = true;
  serviceId: string = '';
  serviceName: string = '';
  offersData: any[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      // get the id of the current service from the url
      this.serviceId = params['id'];
    });

    this.service.getServiceData(this.serviceId).subscribe((data) => {
      this.offersData = data.serviceOffers;
      this.serviceName = data.serviceName;
      //  console.log(this.offersData);
    });
  }
  OnAddNewOfferClick() {
    this.isAddOfferModalHidden = false;
  }
  onModalDismiss = () => {
    this.isAddOfferModalHidden = true;
  };
}
