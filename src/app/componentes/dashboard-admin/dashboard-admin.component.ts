import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public IrADashboard(){
    $("#dashboard").addClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAEmpresas(){
    $("#dashboard").removeClass("active");
    $("#empresas").addClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAAreas(){
    $("#dashboard").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").addClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAClientes(){
    $("#dashboard").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").addClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrASalidas(){
    $("#dashboard").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").addClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAEntradas(){
    $("#dashboard").removeClass("active");
    $("#empresas").removeClass("active");
    $("#areas").removeClass("active");
    $("#clientes").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").addClass("active");
  }

}
