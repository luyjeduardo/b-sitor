import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.css']
})
export class DashboardSuperAdminComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  public IrADashboard(){
    $("#dashboard").addClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAAdministradores(){
    $("#dashboard").removeClass("active");
    $("#administradores").addClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAEmpresas(){
    $("#dashboard").removeClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").addClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAAreas(){
    $("#dashboard").removeClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").addClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAClientes(){
    $("#dashboard").removeClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").addClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrASalidas(){
    $("#dashboard").removeClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").addClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAEntradas(){
    $("#dashboard").removeClass("active");
    $("#administradores").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").addClass("active");
  }

}
