import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/auth.service';
import { Client } from '../interfaces/client.interface';
import { CamelcaseToSpacePipe } from '../camelcase-to-space.pipe';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent {
  constructor(
    private dataService: DataService,
    private router: Router,
    private clientService: FirebaseService
  ) {}

  columns: any[] = [];
  tableData: any[] = [];
  ngOnInit() {
    this.clientService.getUsers().subscribe((items) => (this.tableData = items));
    this.columns = this.dataService.getTableHeaders('clientsTable');
  }
  onShowInvoices(clientId: number) {
    // console.log(clientId);
    this.router.navigate(['/invoicesForClient', clientId]);
  }
}
