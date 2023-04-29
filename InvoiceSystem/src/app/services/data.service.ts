import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  clientsTable: boolean = false;
  billsTable: boolean = false;
  billsTableWithClientID: boolean = false;

  private selectedOptionSubject = new BehaviorSubject<string>('');
  selectedOption$ = this.selectedOptionSubject.asObservable();

  updateSelectedOption(option: string) {
    this.selectedOptionSubject.next(option);
  }
  resetSelectedOption() {
    this.selectedOptionSubject.next('all');
  }

  getTableHeaders(tableType: string): any {
    if (tableType === 'clientsTable') {
      return [
        'id',
        'firstName',
        'lastName',
        'email',
        'postalCode',
        'Action',
      ];
    } else if (tableType === 'billsTable') {
      return [
        'Service',
        'Start date',
        'Last date',
        'Due Rate',
        'Total units used',
        'Invoice Amount',
        'Status',
        'isSelected',
      ];
    } else if (tableType === 'billsTableWithClientID') {
      return [
        'ClientID',
        'Service',
        'Start date',
        'Last date',
        'Due Rate',
        'Total units used',
        'Invoice Amount',
        'Status',
        '',
      ];
    }
  }
}
