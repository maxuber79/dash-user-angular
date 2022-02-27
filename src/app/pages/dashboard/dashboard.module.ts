import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../share/shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
	
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
  ]
})
export class DashboardModule { }
