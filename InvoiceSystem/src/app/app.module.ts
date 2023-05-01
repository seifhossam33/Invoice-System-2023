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
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { CamelcaseToSpacePipe } from './camelcase-to-space.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelephoneServicesComponent } from './telephone-services/telephone-services.component';
import { ServiceOffersCardComponent } from './service-offers-card/service-offers-card.component';
import { OffersTableComponent } from './offers-table/offers-table.component';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    LoginComponent,
    TableComponent,
    SignupComponent,
    ContainerComponent,
    UserProfileComponent,
    OffersTableComponent,
    CamelcaseToSpacePipe,
    ClientsTableComponent,
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
    TelephoneServicesComponent,
    ServiceOffersCardComponent,
    InvoicesForTheAdminComponent,
    InvoicesForTheClientComponent,
  ],
  exports: [AddBillingModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      measurementId: 'G-KY6N12QPLN',
      projectId: 'invoicesystem-340d6',
      messagingSenderId: '48882441169',
      storageBucket: 'invoicesystem-340d6.appspot.com',
      apiKey: 'AIzaSyDkjT6wLTHBDOjvJf8fXNYVq6h7-NCUAvw',
      authDomain: 'invoicesystem-340d6.firebaseapp.com',
      appId: '1:48882441169:web:911a72633bd47a4065def0',
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
