import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DictaminadorDashboardComponent } from './components/dictaminador-dashboard/dictaminador-dashboard.component'

const routes: Routes = [
  { path: 'dashboard', component: DictaminadorDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictaminadorRoutingModule { }
