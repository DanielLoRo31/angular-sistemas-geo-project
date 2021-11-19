import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component'
import { DataInfoComponent } from './data-info/data-info.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'info', component: DataInfoComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
