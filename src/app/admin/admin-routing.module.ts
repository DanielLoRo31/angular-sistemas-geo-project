import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { AdminComponent } from './admin/admin.component';
import { DataInfoComponent } from './data-info/data-info.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'account', component: DataInfoComponent },
      { path: 'account/transactions/:id', component: AccountTransactionsComponent},
      { path: 'transactions', component: TransactionsComponent}
      // { path: '**', redirectTo:'info' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
