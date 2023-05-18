import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/auth.service';
import { SearchService } from '../services/clients-search.service';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table-of-paid-cash',
  templateUrl: './table-of-paid-cash.component.html',
  styleUrls: ['./table-of-paid-cash.component.css']
})
export class TableOfPaidCashComponent {
  constructor(
    private dataService: DataService,
    private clientService: FirebaseService,
    private tableServices: TableDataService
  ) {}

  columns: any[] = [];
  tableData: any[] = [];
  userData: any;
  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
    }
    console.log(this.userData)

    // this.columns = this.dataService.getTableHeaders('cashPaidTable');
    // console.log(this.columns);

    this.tableServices.getBillWithPaymentMethod("cash", this.userData.id).subscribe((bills) => {
      this.tableData = bills;
    });    
    console.log(this.tableData + 'table data check in cash paid');
  }
}
