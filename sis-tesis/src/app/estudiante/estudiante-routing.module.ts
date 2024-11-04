import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteDashboardComponent } from './components/estudiante-dashboard/estudiante-dashboard.component'

const routes: Routes = [
  { path: 'dashboard', component: EstudianteDashboardComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
