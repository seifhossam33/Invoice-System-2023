import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  columns: string[] = [
    'Start date',
    'Last date',
    'Due Rate',
    'Total units used',
    'Invoice Amount',
    'Status',
  ];
  rows: any[] = [
    {
      'Start date': '4/12/2023',
      'Last date': '6/12/2023',
      'Due Rate': '5%',
      'Total units used': 500,
      'Invoice Amount': 1000,
      Status: 'Pre paid',
    },
  ];
}
