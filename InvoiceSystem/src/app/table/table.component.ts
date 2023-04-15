import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  selectedOption: string = '';
  @Input() showCheckboxColumn: boolean = false;

  columns: string[] = [
    'Service',
    'Start date',
    'Last date',
    'Due Rate',
    'Total units used',
    'Invoice Amount',
    'Status',
  ];
  tableData: any[] = [];
  constructor(private dataService: DataService) {
    this.tableData = this.dataService.getTableData();
    console.log(this.tableData);
  }
}
