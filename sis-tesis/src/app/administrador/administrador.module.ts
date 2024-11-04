import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './components/admin-reports/admin-reports.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminInicioComponent } from './components/admin-inicio/admin-inicio.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminReportsComponent,
    AdminHeaderComponent,
    SidebarComponent,
    AdminInicioComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    
  ]
})
export class AdministradorModule { }
