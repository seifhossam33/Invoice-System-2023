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

  getAllBillsForAdmin() {
    this.tableService.getBills().subscribe((items) => {
      this.data = items;
      this.tableData = items;
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
    const userString = localStorage.getItem('user');
    if (userString) {
      this.userData = JSON.parse(localStorage.getItem('user') || '');
     // console.log('is Admin ??', this.userData.isAdmin);
      if (this.userData.id && !this.userData.isAdmin) {
        this.getBillsForUser(this.userData.id);
      } else if (this.userData.isAdmin) {
        if (this.clientId != '' && this.clientId != undefined) {
          console.log(this.clientId);
          this.getBillsForUser(this.clientId);
        } else this.getAllBillsForAdmin();
      }
    } else {
      console.log("You don't have access");
    }
    this.columns = this.dataService.getTableHeaders(this.tableHeaders);
    this.tableObservable = this.dataService.selectedOption$.subscribe(
      (option) => {
        this.filterTableData(option);
      }
    );
  }
  filterTableData(option: string) {
  //  console.log(option);
    let statusFilter: string;
    if (this.pendingPayments) {
      statusFilter = 'Postpaid';
    } else if (this.paymentsHistory) {
      statusFilter = 'Prepaid,Paid';
    } else {
      statusFilter = 'Postpaid,Prepaid,Paid';
    }

    if (option !== 'all') {
      // this.tableData = this.data.filter((item) => item.Service === option);
      this.tableData = this.data.filter((item) => {
        let statusMatch = statusFilter.includes(item.Status);
        let serviceMatch = item.Service === option;
        return statusMatch && serviceMatch;
      });
    } else {
      this.tableData = this.data.filter((item) => {
        return statusFilter.includes(item.Status);
      });
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
}
