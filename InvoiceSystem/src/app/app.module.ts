import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { FormsModule } from '@angular/forms';
import { VisaMethodWindowComponent } from './visa-method-window/visa-method-window.component';
import { CashMethodWindowComponent } from './cash-method-window/cash-method-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    PaymentWindowComponent,
    VisaMethodWindowComponent,
    CashMethodWindowComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
