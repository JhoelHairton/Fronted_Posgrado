import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './components/admin-reports/admin-reports.component';
import { GuardService } from '../core/services/guard.service';
import { AdminInicioComponent } from './components/admin-inicio/admin-inicio.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [GuardService],
    data: { expectedRole: 'admin' },
    children: [
      { path: '', component: AdminInicioComponent },  // Página de inicio del Dashboard
      { path: 'reportes', component: AdminReportsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
