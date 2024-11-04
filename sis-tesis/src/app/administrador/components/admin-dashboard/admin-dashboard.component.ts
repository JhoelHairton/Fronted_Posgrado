import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

  
  constructor( private authService: AuthService) {}


  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout();  // Llama a logout() en AuthService
  }
}
