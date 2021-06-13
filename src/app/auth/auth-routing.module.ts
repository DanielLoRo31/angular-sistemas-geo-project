import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from '../guards/session.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [SessionGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [SessionGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
