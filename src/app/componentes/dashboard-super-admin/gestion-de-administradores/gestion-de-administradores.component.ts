import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-de-administradores',
  templateUrl: './gestion-de-administradores.component.html',
  styleUrls: ['./gestion-de-administradores.component.css']
})
export class GestionDeAdministradoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Agregar(){
    $("#agregacion").addClass("regionseleccionada");
    $("#visualizacion").removeClass("regionseleccionada");
    $("#actualizacion").removeClass("regionseleccionada");
    $("#registrar").prop("hidden", false);
    $("#ver").prop("hidden", true);
    $("#modificar").prop("hidden", true);
  }

  public Visualizar(){
    $("#agregacion").removeClass("regionseleccionada");
    $("#visualizacion").addClass("regionseleccionada");
    $("#actualizacion").removeClass("regionseleccionada");
    $("#registrar").prop("hidden", true);
    $("#ver").prop("hidden", false);
    $("#modificar").prop("hidden", true);
  }

  public Actualizar(){
    $("#agregacion").removeClass("regionseleccionada");
    $("#visualizacion").removeClass("regionseleccionada");
    $("#actualizacion").addClass("regionseleccionada");
    $("#registrar").prop("hidden", true);
    $("#ver").prop("hidden", true);
    $("#modificar").prop("hidden", false);
  }

}
