import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { VisaMethodWindowComponent } from './visa-method-window/visa-method-window.component';
import { CashMethodWindowComponent } from './cash-method-window/cash-method-window.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { DropDownServicesComponent } from './drop-down-services/drop-down-services.component';
import { TableComponent } from './table/table.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule
    PaymentWindowComponent,
    VisaMethodWindowComponent,
    CashMethodWindowComponent,
    PendingPaymentsComponent,
    DropDownServicesComponent,
    TableComponent
  ],
  imports: [BrowserModule,
    FormsModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
