import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistrosGeneralesComponent } from './componentes/registros-generales/registros-generales.component';
import { DashboardSuperAdminComponent } from './componentes/dashboard-super-admin/dashboard-super-admin.component';
import { DashboardAdminComponent } from './componentes/dashboard-admin/dashboard-admin.component';
import { DashboardFuncionarioComponent } from './componentes/dashboard-funcionario/dashboard-funcionario.component';
import { DashboardContratistaComponent } from './componentes/dashboard-contratista/dashboard-contratista.component';
import { DashboardVisitanteComponent } from './componentes/dashboard-visitante/dashboard-visitante.component';
import { GestionDeClientesComponent } from './componentes/compartidos/administradores/gestion-de-clientes/gestion-de-clientes.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { EntradasComponent } from './componentes/compartidos/administradores/entradas/entradas.component';
import { SalidasComponent } from './componentes/compartidos/administradores/salidas/salidas.component';
import { GestionDeAreasComponent } from './componentes/compartidos/administradores/gestion-de-areas/gestion-de-areas.component';
import { GestionDeEmpresasComponent } from './componentes/compartidos/administradores/gestion-de-empresas/gestion-de-empresas.component';
import { EntradasClComponent } from './componentes/compartidos/clientes/entradas-cl/entradas-cl.component';
import { SalidasClComponent } from './componentes/compartidos/clientes/salidas-cl/salidas-cl.component';
import { GestionDeAdministradoresComponent } from './componentes/dashboard-super-admin/gestion-de-administradores/gestion-de-administradores.component';

const routes: Routes = [
  {
    path: 'principal', 
    component: PrincipalComponent,
    canActivate: [],
    children: [
      { path: 'ingresar', component: InicioDeSesionComponent },
      { path: 'registrarse', component: RegistrosGeneralesComponent }
    ]
  },
  {
    path: 'superadmin', 
    component: DashboardSuperAdminComponent,
    canActivate: [],
    children: [
      { path: 'gestionaradministradores', component: GestionDeAdministradoresComponent },
      { path: 'gestionarclientes', component: GestionDeClientesComponent },
      { path: 'entradas', component: EntradasComponent },
      { path: 'salidas', component: SalidasComponent },
      { path: 'gestionarempresas', component: GestionDeEmpresasComponent },
      { path: 'gestionarareas', component: GestionDeAreasComponent }
    ]
  },
  {
    path: 'admin', 
    component: DashboardAdminComponent,
    canActivate: [],
    children: [
      { path: 'gestionarclientes', component: GestionDeClientesComponent },
      { path: 'entradas', component: EntradasComponent },
      { path: 'salidas', component: SalidasComponent },
      { path: 'gestionarempresas', component: GestionDeEmpresasComponent },
      { path: 'gestionarareas', component: GestionDeAreasComponent }
    ]
  },
  {
    path: 'funcionario', 
    component: DashboardFuncionarioComponent,
    canActivate: [],
    children: [
      { path: 'entradas', component: EntradasClComponent },
      { path: 'salidas', component: SalidasClComponent }
    ]
  },
  {
    path: 'contratista', 
    component: DashboardContratistaComponent,
    canActivate: [],
    children: [
      { path: 'entradas', component: EntradasClComponent },
      { path: 'salidas', component: SalidasClComponent }
    ]
  },
  {
    path: 'visitante', 
    component: DashboardVisitanteComponent,
    canActivate: [],
    children: [
      { path: 'entradas', component: EntradasClComponent },
      { path: 'salidas', component: SalidasClComponent }
    ]
  },
  { path: '', redirectTo: '/principal/ingresar', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
