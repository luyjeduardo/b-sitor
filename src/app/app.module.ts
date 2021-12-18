import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardSuperAdminComponent } from './componentes/dashboard-super-admin/dashboard-super-admin.component';
import { DashboardAdminComponent } from './componentes/dashboard-admin/dashboard-admin.component';
import { DashboardVisitanteComponent } from './componentes/dashboard-visitante/dashboard-visitante.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistrosGeneralesComponent } from './componentes/registros-generales/registros-generales.component';
import { DashboardContratistaComponent } from './componentes/dashboard-contratista/dashboard-contratista.component';
import { DashboardFuncionarioComponent } from './componentes/dashboard-funcionario/dashboard-funcionario.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { GestionDeClientesComponent } from './componentes/compartidos/administradores/gestion-de-clientes/gestion-de-clientes.component';
import { EntradasComponent } from './componentes/compartidos/administradores/entradas/entradas.component';
import { SalidasComponent } from './componentes/compartidos/administradores/salidas/salidas.component';
import { GestionDeEmpresasComponent } from './componentes/compartidos/administradores/gestion-de-empresas/gestion-de-empresas.component';
import { GestionDeAreasComponent } from './componentes/compartidos/administradores/gestion-de-areas/gestion-de-areas.component';
import { SalidasClComponent } from './componentes/compartidos/clientes/salidas-cl/salidas-cl.component';
import { EntradasClComponent } from './componentes/compartidos/clientes/entradas-cl/entradas-cl.component';
import { RegistrarComponent } from './componentes/compartidos/administradores/gestion-de-clientes/registrar/registrar.component';
import { ModificarComponent } from './componentes/compartidos/administradores/gestion-de-clientes/modificar/modificar.component';
import { VerComponent } from './componentes/compartidos/administradores/gestion-de-clientes/ver/ver.component';
import { GestionDeAdministradoresComponent } from './componentes/dashboard-super-admin/gestion-de-administradores/gestion-de-administradores.component';
import { RegistraradminComponent } from './componentes/dashboard-super-admin/gestion-de-administradores/registraradmin/registraradmin.component';
import { ModificaradminComponent } from './componentes/dashboard-super-admin/gestion-de-administradores/modificaradmin/modificaradmin.component';
import { VeradminComponent } from './componentes/dashboard-super-admin/gestion-de-administradores/veradmin/veradmin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardSuperAdminComponent,
    DashboardAdminComponent,
    DashboardVisitanteComponent,
    InicioDeSesionComponent,
    RegistrosGeneralesComponent,
    DashboardContratistaComponent,
    DashboardFuncionarioComponent,
    PrincipalComponent,
    NotFoundComponent,
    GestionDeClientesComponent,
    EntradasComponent,
    SalidasComponent,
    GestionDeEmpresasComponent,
    GestionDeAreasComponent,
    SalidasClComponent,
    EntradasClComponent,
    RegistrarComponent,
    ModificarComponent,
    VerComponent,
    GestionDeAdministradoresComponent,
    RegistraradminComponent,
    ModificaradminComponent,
    VeradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
