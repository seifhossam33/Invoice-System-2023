import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/clients-search.service';
@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css'],
})
export class ClientsComponentComponent {
  tableHeaders: string = 'clientsTable';
  showAction: boolean = true;
  filterValue = '';
  // todo finish search
  constructor(private dataService: DataService, private searchService: SearchService) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
    this.searchService.currentSearchValue.subscribe(searchValue => { console.log(searchValue);
      this.filterValue = searchValue;
    });
  }

  onFilter() {
    this.searchService.updateSearchValue(this.filterValue);
  }
}
