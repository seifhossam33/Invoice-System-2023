import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { VisaMethodWindowComponent } from './visa-method-window/visa-method-window.component';
import { CashMethodWindowComponent } from './cash-method-window/cash-method-window.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { DropDownServicesComponent } from './drop-down-services/drop-down-services.component';
import { TableComponent } from './table/table.component';
import { DataService } from './services/data.service';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponentComponent } from './clients-component/clients-component.component';
import { InvoicesForTheAdminComponent } from './invoices-for-the-admin/invoices-for-the-admin.component';
import { InvoicesForTheClientComponent } from './invoices-for-the-client/invoices-for-the-client.component';
import { UpdateUnitCostComponent } from './update-unit-cost/update-unit-cost.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBillingModalComponent } from './add-billing-modal/add-billing-modal.component';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    TableComponent,
    ContainerComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    PaymentWindowComponent,
    UpdateUnitCostComponent,
    AddBillingModalComponent,
    PaymentsHistoryComponent,
    PendingPaymentsComponent,
    VisaMethodWindowComponent,
    CashMethodWindowComponent,
    DropDownServicesComponent,
    ClientsComponentComponent,
    InvoicesForTheAdminComponent,
    InvoicesForTheClientComponent,
    SignupComponent,
    LoginComponent,
  ],
  exports: [AddBillingModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDkjT6wLTHBDOjvJf8fXNYVq6h7-NCUAvw',
      authDomain: 'invoicesystem-340d6.firebaseapp.com',
      projectId: 'invoicesystem-340d6',
      storageBucket: 'invoicesystem-340d6.appspot.com',
      messagingSenderId: '48882441169',
      appId: '1:48882441169:web:911a72633bd47a4065def0',
      measurementId: 'G-KY6N12QPLN',
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
