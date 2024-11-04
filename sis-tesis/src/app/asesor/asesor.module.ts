import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorDashboardComponent } from './components/asesor-dashboard/asesor-dashboard.component';
import { AsesorRoutingModule } from './asesor-routing.module'



@NgModule({
  declarations: [
    AsesorDashboardComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
