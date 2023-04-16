import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drop-down-services',
  templateUrl: './drop-down-services.component.html',
  styleUrls: ['./drop-down-services.component.css'],
})
export class DropDownServicesComponent {
  constructor(private dataService: DataService) {}
  onSelect(event: any) {
    this.dataService.updateSelectedOption(event.target.value);
  }
}
