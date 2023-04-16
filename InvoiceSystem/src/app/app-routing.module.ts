import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { PaymentWindowComponent } from './payment-window/payment-window.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';

const routes: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'pending', component: PendingPaymentsComponent },
  { path: 'pay', component: PaymentWindowComponent },
  { path: 'history', component: PaymentsHistoryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
