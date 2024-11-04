import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictaminadorDashboardComponent } from './components/dictaminador-dashboard/dictaminador-dashboard.component';
import { DictaminadorRoutingModule } from './dictaminador-routing.module'



@NgModule({
  declarations: [
    DictaminadorDashboardComponent
  ],
  imports: [
    CommonModule,
    DictaminadorRoutingModule
  ]
})
export class DictaminadorModule { }
