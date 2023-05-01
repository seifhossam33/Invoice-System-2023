import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { TableDataService } from '../services/table-data.service';
import { BillsToPayService } from '../services/bills-to-pay.service';
import { Bill } from '../interfaces/bill';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // todo adjust types of arrays
  constructor(
    private dataService: DataService,
    private tableService: TableDataService,
    private billingService: BillsToPayService,
    private route: ActivatedRoute,
    private tableServices: TableDataService
  ) {}

  @Input() showCheckboxColumn: boolean = false;
  @Input() tableHeaders = '';
  @Input() showAction: boolean = false;
  @Input() tableArray: any = [];
  @Input() pendingPayments: boolean = false;
  @Input() paymentsHistory: boolean = false;
  columns: any[] = [];
  data: any[] = [];
  tableData: any[] = [];
  selectedAll: boolean = false;
  tableObservable!: Subscription;
  clientId: string = '';
  userData: any;
  getBillsForUser(userId: string) {
    this.tableServices.filterBills(userId).subscribe((bills) => {
      this.data = bills;
      this.tableData = bills;
      if (this.pendingPayments) {
        this.filterForPendingPayments();
      } else if (this.paymentsHistory) {
        this.filterForPaymentsHistory();
      }
    });
  }

  filterForPendingPayments() {
    this.tableData = this.data.filter((item) => item.Status === 'Postpaid');
  }

  filterForPaymentsHistory() {
    this.tableData = this.data.filter(
      (item) => item.Status === 'Prepaid' || item.Status === 'Paid'
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
      if (this.userData.id) {
        this.getBillsForUser(this.userData.id);
      }
    } else if (this.clientId != '' && this.clientId != undefined) {
      this.getBillsForUser(this.clientId);
    } else {
      this.tableService.getBills().subscribe((items) => {
        this.data = items;
        this.tableData = items;
        if (this.pendingPayments) {
          this.filterForPendingPayments();
        } else if (this.paymentsHistory) {
          this.filterForPaymentsHistory();
        }
      });
    }
    this.columns = this.dataService.getTableHeaders(this.tableHeaders);
    this.tableObservable = this.dataService.selectedOption$.subscribe(
      (option) => {
        this.filterTableData(option);
      }
    );
  }
  filterTableData(option: string) {
    if (option === '1') {
      // electricity
      this.tableData = this.data.filter(
        (item) => item.Service === 'Electricity'
      );
    } else if (option === '2') {
      // water
      this.tableData = this.data.filter((item) => item.Service === 'Water');
    } else if (option === '3') {
      // telephone
      this.tableData = this.data.filter((item) => item.Service === 'Telephone');
    } else {
      this.tableData = this.data;
    }
  }

  removeFromBillingArray(bill: Bill) {
    const index = this.billingService.selectedBillsToPay.indexOf(bill);
    if (index !== -1) {
      this.billingService.selectedBillsToPay.splice(index, 1);
    }
  }

  addToBillingArray(bill: Bill) {
    if (!this.billingService.selectedBillsToPay.includes(bill)) {
      this.billingService.selectedBillsToPay.push(bill);
    }
  }

  selectAllCheckBoxes() {
    for (let bill of this.tableData) {
      if (bill['Status'] !== 'Prepaid' && bill['Status'] !== 'Paid') {
        if (this.selectedAll == true) {
          bill.isSelected = this.selectedAll;
          this.addToBillingArray(bill);
        } else {
          bill.isSelected = this.selectedAll;
          this.removeFromBillingArray(bill);
        }
      }
    }
  }
  onChangeCheckbox(event: any, bill: Bill) {
    this.selectedAll = this.tableData.every((item) => item.selected);
    if (event.target.checked) {
      this.addToBillingArray(bill);
    } else {
      this.removeFromBillingArray(bill);
    }
  }
  shouldDisableCheckbox(invoice: any): boolean {
    return invoice['Status'] === 'Prepaid' || invoice['Status'] === 'Paid';
  }
}
