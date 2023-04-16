import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  columns: string[] = [
    'Service',
    'Start date',
    'Last date',
    'Due Rate',
    'Total units used',
    'Invoice Amount',
    'Status',
    'isSelected',
  ];
  selectedAll: boolean = false;
  @Input() showCheckboxColumn: boolean = false;

  selectedOption: string = '';
  data: any[] = [];
  filteredData: any[] = [];
  tableData: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.data = data;
      this.filterTableData();
    });

    this.dataService.selectedOption$.subscribe((option) => {
      this.selectedOption = option;
      this.filterTableData();
    });
  }
  filterTableData() {
    console.log(this.selectedOption);
    if (this.selectedOption === '1') {
      // electricity
      this.tableData = this.data.filter(
        (item) => item.Service === 'Electricity'
      );
    } else if (this.selectedOption === '2') {
      // water
      this.tableData = this.data.filter((item) => item.Service === 'Water');
    } else if (this.selectedOption === '3') {
      // telephone
      this.tableData = this.data.filter((item) => item.Service === 'Telephone');
    } else {
      this.tableData = this.data;
    }
  }

  selectAllCheckBoxes() {
    for (let row of this.tableData) {
      row.isSelected = this.selectedAll;
    }
  }
  onChangeCheckbox() {
    this.selectedAll = this.tableData.every((item) => item.selected);
  }
}
