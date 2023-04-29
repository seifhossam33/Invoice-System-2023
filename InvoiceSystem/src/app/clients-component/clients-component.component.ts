import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css'],
})
export class ClientsComponentComponent {
  tableHeaders: string = 'clientsTable';
  showAction: boolean = true;
  // todo finish search
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.resetSelectedOption();
  }
}
