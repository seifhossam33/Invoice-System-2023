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
  columns: any[] = [];
  data: any[] = [];
  tableData: any[] = [];
  selectedAll: boolean = false;
  tableObservable!: Subscription;
  clientId: string = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });
    if (this.clientId != '' && this.clientId != undefined) {
      this.tableServices.filterBills(this.clientId).subscribe((bills) => {
        this.data = bills;
        this.tableData = bills;
        //console.log(bills);
      });
    }
    if (this.clientId == '' || this.clientId == undefined) {
      this.tableService.getBills().subscribe((items) => {
        this.data = items;
        this.tableData = items;
      });
    }
    this.columns = this.dataService.getTableHeaders(this.tableHeaders);
    this.tableObservable = this.dataService.selectedOption$.subscribe(
      (option) => {
        this.filterTableData(option);
      }
    );

    //console.log(this.columns);
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
      if (bill['Status'] !== 'Pre paid') {
        if (this.selectedAll == true) {
          bill.isSelected = this.selectedAll;
          this.addToBillingArray(bill);
        } else {
          bill.isSelected = this.selectedAll;
          this.removeFromBillingArray(bill);
        }
      }
    }
    console.log(this.billingService.selectedBillsToPay);
  }
  onChangeCheckbox(event: any, bill: Bill) {
    this.selectedAll = this.tableData.every((item) => item.selected);
    if (event.target.checked) {
      this.addToBillingArray(bill);
    } else {
      this.removeFromBillingArray(bill);
    }
    console.log(this.billingService.selectedBillsToPay);
  }
  shouldDisableCheckbox(invoice: any): boolean {
    return invoice['Status'] === 'Pre paid';
  }

  // todo fill an array of items to pay
  // todo adjust types of arrays
}
