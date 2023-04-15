import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private tableData: any[] = [
    {
      Service: 'Electricity',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
    },
    {
      Service: 'water',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
    },
  
  ];

  setTableData(data: any[]) {
    this.tableData = data;
  //  console.log(this.tableData);
  }

  getTableData() {
    console.log(this.tableData);
    return this.tableData;
  }
}
