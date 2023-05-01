import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/auth.service';
import { Client } from '../interfaces/client.interface';
import { CamelcaseToSpacePipe } from '../camelcase-to-space.pipe';
import { SearchService } from '../services/clients-search.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent {
  constructor(
    private dataService: DataService,
    private router: Router,
    private clientService: FirebaseService,
    private searchService: SearchService
  ) {}

  columns: any[] = [];
  tableData: any[] = [];

  ngOnInit() {
    this.clientService.getUsers().subscribe((items) => (this.tableData = items));
    console.log(this.tableData+"table data check");
    this.columns = this.dataService.getTableHeaders('clientsTable');
    this.searchService.currentSearchValue.subscribe(searchValue => {
      if (searchValue) {
        this.tableData = this.tableData.filter(row => {
          console.log(row+"row details");
          return (
            row.firstName.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
      } else {
        this.clientService.getUsers().subscribe((items) => (this.tableData = items));
      }
    });

  }
  onShowInvoices(clientId: string) {
    // console.log(clientId);
    this.router.navigate(['/invoicesForClient', clientId]);
  }
}
