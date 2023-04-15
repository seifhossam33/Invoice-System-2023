import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drop-down-services',
  templateUrl: './drop-down-services.component.html',
  styleUrls: ['./drop-down-services.component.css'],
})
export class DropDownServicesComponent {
  selectedOption: string = '';
  tableData: any[] = [
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
    {
      Service: 'telephone',
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
    },
  ];

  filterTableData() {
    if (this.selectedOption === '1') {
      // electricity
      this.tableData = [
        {
          Service: 'Electricity',
          'Start date': '4/12/2023',
          'Last date': '6/12/2023',
          'Due Rate': '5%',
          'Total units used': 500,
          'Invoice Amount': 1000,
          Status: 'Pre paid',
        },
      ];
      console.log(1);
    } else if (this.selectedOption === '2') {
      // water
      this.tableData = [
        {
          Service: 'Water',
          'Start date': '4/12/2023',
          'Last date': '6/12/2023',
          'Due Rate': '5%',
          'Total units used': 500,
          'Invoice Amount': 1000,
          Status: 'Pre paid',
        },
      ];
    } else if (this.selectedOption === '3') {
      // telephone
      this.tableData = [
        {
          Service: 'telephone',
          'Start date': '4/12/2023',
          'Last date': '6/12/2023',
          'Due Rate': '5%',
          'Total units used': 500,
          'Invoice Amount': 1000,
          Status: 'Pre paid',
        },
      ];
    } else {
      // all
      this.tableData = [];
    }
    this.sendTableData();
  }
  constructor(private dataService: DataService) {}

  sendTableData() {
    this.dataService.setTableData(this.tableData);
    console.log("sending table data")
  }
}
