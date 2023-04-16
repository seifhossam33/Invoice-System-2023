import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private dataSubject = new BehaviorSubject<any[]>([
    {
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
      Service: 'Water',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
      isSelected: false,
    },
    {
      Service: 'Telephone',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
      isSelected: false,
    },
    {
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
  selectedOption = '';
  selectedOption$ = this.selectedOptionSubject.asObservable();

  updateData(newData: any[]) {
    this.dataSubject.next(newData);
  }

  updateSelectedOption(option: string) {
    this.selectedOptionSubject.next(option);
  }
}
