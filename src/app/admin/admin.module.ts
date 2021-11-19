import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ComponentsModule } from '../components/components.module';
import { DataInfoComponent } from './data-info/data-info.component';


@NgModule({
  declarations: [AdminComponent, DataInfoComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule
  ]
})
export class AdminModule { }
