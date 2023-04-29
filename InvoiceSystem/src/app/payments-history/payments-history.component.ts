import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrls: ['./payments-history.component.css'],
})
export class PaymentsHistoryComponent {
  tableHeaders: string = 'billsTable';
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
  }
}
