import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchValue = new BehaviorSubject<string>('');
  currentSearchValue = this.searchValue.asObservable();

  updateSearchValue(value: string) {
    this.searchValue.next(value);

  }
}
