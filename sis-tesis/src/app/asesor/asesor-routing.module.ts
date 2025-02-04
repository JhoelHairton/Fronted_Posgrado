import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsesorDashboardComponent } from './components/asesor-dashboard/asesor-dashboard.component'

const routes: Routes = [
  { path: 'dashboard', component: AsesorDashboardComponent },
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
