import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteDashboardComponent } from './components/estudiante-dashboard/estudiante-dashboard.component';
import { EstudianteRoutingModule } from './estudiante-routing.module'



@NgModule({
  declarations: [
    EstudianteDashboardComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
