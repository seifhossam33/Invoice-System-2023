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

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'pendingPayments', component: PendingPaymentsComponent },
  { path: 'pay', component: PaymentWindowComponent },
  { path: 'paymentsHistory', component: PaymentsHistoryComponent },
  { path: 'clients', component: ClientsComponentComponent },
  { path: 'invoicesForAdmin', component: InvoicesForTheAdminComponent },
  { path: 'updateUnitCost', component: UpdateUnitCostComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
