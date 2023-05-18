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
import { AddTelephoneServiceComponent } from './add-telephone-service/add-telephone-service.component';
import { TelephoneServicesForAdminComponent } from './telephone-services-for-admin/telephone-services-for-admin.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AuthGuard } from './services/auth.guard';
import { TableOfPaidCashComponent } from './table-of-paid-cash/table-of-paid-cash.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //check our default route aka home page
  {
    path: 'pendingPayments',
    component: PendingPaymentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pay',
    component: PaymentWindowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'paymentsHistory',
    component: PaymentsHistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ClientsComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'invoicesForAdmin',
    component: InvoicesForTheAdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateUnitCost',
    component: UpdateUnitCostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'invoicesForClient/:id',
    component: InvoicesForTheClientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'container',
    component: ContainerComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'telephoneServices',
    component: TelephoneServicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addTelephoneService',
    component: AddTelephoneServiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'telephoneServicesForAdmin',
    component: TelephoneServicesForAdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'serviceDetails/:id',
    component: ServiceDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'paidCash',
    component:TableOfPaidCashComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }, // wildcard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
