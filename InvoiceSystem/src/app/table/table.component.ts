import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private router: Router) {}
  selectedAll: boolean = false;
  @Input() showCheckboxColumn: boolean = false;
  @Input() tableHeaders = '';
  @Input() showAction: boolean = false;
  columns: any[] = [];

  selectedOption: string = '';
  data: any[] = [];
  filteredData: any[] = [];
  tableData: any[] = [];
  tableObservable!: Subscription;

  ngOnInit() {
    this.columns = this.dataService.getTableHeaders(this.tableHeaders);
    this.dataService.data$.subscribe((data) => {
      this.data = data;
      this.filterTableData();
    });

    this.tableObservable = this.dataService.selectedOption$.subscribe(
      (option) => {
        this.selectedOption = option;
        this.filterTableData();
      }
    );
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
      if (row['Status'] !== 'Pre paid') row.isSelected = this.selectedAll;
    }
  }
  onChangeCheckbox() {
    this.selectedAll = this.tableData.every((item) => item.selected);
  }
  shouldDisableCheckbox(invoice: any): boolean {
    return invoice['Status'] === 'Pre paid';
  }
  onShowInvoices(clientId: number) {
    // console.log(clientId);
    this.router.navigate(['/invoicesForClient', clientId]);
  }
  // todo fill an array of items to pay
  // todo adjust types of arrays
  // todo sort table based on endDate

  ngOnDestroy() {
    this.tableObservable.unsubscribe();
  }
}
