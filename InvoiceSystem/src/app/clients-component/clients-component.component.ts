import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css'],
})
export class ClientsComponentComponent {
  showCheckboxColumn: boolean = false;
  tableHeaders: string = 'clientsTable';
  // todo finish search 
}
