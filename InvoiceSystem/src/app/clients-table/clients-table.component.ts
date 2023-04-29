import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableDataService } from '../services/table-data.service';
@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent {
  constructor(
    private dataService: DataService,
    private router: Router,
    private tableService: TableDataService
  ) {}

  columns: any[] = [];
  data: any[] = [];
  tableData: any[] = [];
  tableObservable!: Subscription;
  ngOnInit() {
    this.columns = this.dataService.getTableHeaders('clientsTable');
  }
  onShowInvoices(clientId: number) {
    // console.log(clientId);
    this.router.navigate(['/invoicesForClient', clientId]);
  }
}
