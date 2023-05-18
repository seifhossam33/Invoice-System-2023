export interface Bill {
  id?: string;
  ClientID: string;
  Service: string;
  'Start date': Date;
  'Last date': Date;
  'Due Rate': number;
  'Service Offer': string;
  Offer: string;
  'Total units used': number;
  'Invoice Amount': number;
  Status: string;
  isSelected: boolean;
  paymentMethod: string,
  dateOfPayment: Date;
}
