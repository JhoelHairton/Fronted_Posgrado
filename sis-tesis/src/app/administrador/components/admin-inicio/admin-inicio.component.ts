import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrl: './admin-inicio.component.css',
  encapsulation: ViewEncapsulation.None // Esto permite que los estilos sean globales

})
export class AdminInicioComponent {


  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

}
