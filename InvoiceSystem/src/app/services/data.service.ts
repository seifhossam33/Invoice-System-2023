import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  clientsTable: boolean = false;
  billsTable: boolean = false;
  billsTableWithClientID: boolean = true;

  private dataSubject = new BehaviorSubject<any[]>([
    {
      'Client ID': 1,
      Service: 'Electricity',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
      isSelected: false,
    },
    {
      'Client ID': 2,
      Service: 'Water',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Post paid',
      isSelected: false,
    },
    {
      'Client ID': 3,
      Service: 'Telephone',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Post paid',
      isSelected: false,
    },
    {
      'Client ID': 4,
      Service: 'Telephone',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
      isSelected: false,
    },
  ]);
  data$ = this.dataSubject.asObservable();

  private selectedOptionSubject = new BehaviorSubject<string>('');
  selectedOption$ = this.selectedOptionSubject.asObservable();

  updateSelectedOption(option: string) {
    console.log(option);
    this.selectedOptionSubject.next(option);
  }
  resetSelectedOption() {
    this.selectedOptionSubject.next('all');
  }

  getTableHeaders(tableType: string): any {
    //  console.log('aaa' + tableType);
    if (tableType === 'clientsTable') {
      return [
        'Client ID',
        'First Name',
        'Last Name',
        'Email',
        'Address',
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
        'Client ID',
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
