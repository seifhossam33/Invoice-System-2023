import { Injectable } from '@angular/core';
import { Bill } from '../interfaces/bill';

@Injectable({
  providedIn: 'root',
})
export class BillsToPayService {
  selectedBillsToPay: Bill[] = [];
  constructor() {}
}
