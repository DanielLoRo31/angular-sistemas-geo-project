import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ComponentsModule } from '../components/components.module';
import { DataInfoComponent } from './data-info/data-info.component';
import { ChartsModule } from 'ng2-charts';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [AdminComponent, DataInfoComponent, AccountTransactionsComponent, TransactionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    ChartsModule
  ]
})
export class AdminModule { }
