import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';
import { ClientsComponentComponent } from './clients-component/clients-component.component';
import { InvoicesForTheAdminComponent } from './invoices-for-the-admin/invoices-for-the-admin.component';
import { UpdateUnitCostComponent } from './update-unit-cost/update-unit-cost.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvoicesForTheClientComponent } from './invoices-for-the-client/invoices-for-the-client.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TelephoneServicesComponent } from './telephone-services/telephone-services.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //check our default route aka home page
  { path: 'pendingPayments', component: PendingPaymentsComponent },
  { path: 'pay', component: PaymentWindowComponent },
  { path: 'paymentsHistory', component: PaymentsHistoryComponent },
  { path: 'clients', component: ClientsComponentComponent },
  { path: 'invoicesForAdmin', component: InvoicesForTheAdminComponent },
  { path: 'updateUnitCost', component: UpdateUnitCostComponent },
  { path: 'invoicesForClient/:id', component: InvoicesForTheClientComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'telephoneServices', component: TelephoneServicesComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: '**', component: PageNotFoundComponent }, // wildcard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
