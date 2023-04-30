import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.css'],
})
export class PendingPaymentsComponent {
  showCheckboxColumn: boolean = true;
  tableHeaders: string = 'billsTable';
  // todo implement on pay method
  onPay() {
    this.router.navigate(['/pay']);
  }
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
  }

  // todo displays bills with postpaid status get client id from routing
}
