import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/entidades/clases/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validaciones } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-gestion-de-empresas',
  templateUrl: './gestion-de-empresas.component.html',
  styleUrls: ['./gestion-de-empresas.component.css']
})
export class GestionDeEmpresasComponent implements OnInit {

  public Nit_mod! : number;
  public Nombre_mod! : string;
  public Direccion_mod! : string;
  private Idempresa_mod! :  number;
  public Empresas: Empresa[] = [];
  private Empresa: Empresa = Empresa.ObtenerInstancia();
  private Validaciones: Validaciones = Validaciones.ObtenerInstancia();

  constructor(private serviciodeempresa: EmpresaService,
              public modalngbootstrap: NgbModal) { 
    this.CargarEmpresas();
  }

  ngOnInit(): void {
  }

  private CargarEmpresas() {
    this.Empresas = [];
    (this.serviciodeempresa.ObtenerTodas())
      .toPromise()
      .then((empresas : any)=> {
        empresas.forEach((empresa : any) =>{
          var empresa_temp = new Empresa();
          empresa_temp.Direccion_ = empresa.Direccion;
          empresa_temp.Idempresa_ = empresa.Idempresa;
          empresa_temp.Idsuperadmin_ = empresa.Idsuperadmin;
          empresa_temp.Nit_ = empresa.Nit;
          empresa_temp.Nombre_ = empresa.Nombre;
          this.Empresas.push(empresa_temp);
        });
    });
  }

  public ValidarParaRegistrar(){
    this.Empresa.Nit_ = Number($("#nit").val());
    this.Empresa.Nombre_ = String($("#nombre").val());
    this.Empresa.Direccion_ = String($("#direccion").val());
    this.Empresa.Idsuperadmin_ = 1;
    if (this.Empresa.ValidarPropiedades() === "success") {
      this.RegistrarInformacion();
    } else {
      this.AlertaSwalError("Verificar", this.Empresa.ValidarPropiedades());
    }
  }

  private RegistrarInformacion() {
    this.serviciodeempresa.RegistrarInformacion(this.Empresa).subscribe((respuesta : any)=> {
      if (respuesta["Status"] === "Empresa Insertada") {
        this.AlertaSwalSuccess("Registrada", respuesta["Status"]);
        this.Limpiar();
      } else {
        this.AlertaSwalError("Error", respuesta["Status"]);
      }
      this.CargarEmpresas();
    });
  }

  public ValidarParaModificar(){
    this.Empresa.Idempresa_ = this.Idempresa_mod;
    this.Empresa.Nit_ = this.Nit_mod; 
    this.Empresa.Nombre_ = this.Nombre_mod;
    this.Empresa.Direccion_ = this.Direccion_mod;
    this.Empresa.Idsuperadmin_ = 5;
    if (this.Empresa.ValidarPropiedades() === "success") {
      this.ModificarInformacion();
    } else {
      this.AlertaSwalError("Verificar", this.Empresa.ValidarPropiedades());
    }
  }

  private ModificarInformacion() {
    this.serviciodeempresa.ActualizarUna(this.Empresa).subscribe((respuesta : any)=> {
      if (respuesta["Status"] === "Empresa Actualizada") {
        this.AlertaSwalSuccess("Modificada", respuesta["Status"]);
        this.Limpiar();
      } else {
        this.AlertaSwalError("Error", respuesta["Status"]);
      }
      this.CargarEmpresas();
    });
  }

  public AbrirModalModificarEmpresa(empresa: Empresa, contenido: any) {
    this.CargarInformacion(empresa);
    this.modalngbootstrap.open(contenido, { size: 'lg' })
  }

  private CargarInformacion(empresa: Empresa) {
    this.Idempresa_mod = empresa.Idempresa_;
    this.Nit_mod = empresa.Nit_;
    this.Nombre_mod = empresa.Nombre_;
    this.Direccion_mod = empresa.Direccion_;
  }

  public ValidarCaracteresNumericosYMaxLength(id: string, max: number, event: any){
    this.Validaciones.ValidarCaracteresNumericosYMaxlength(id, event, max);
  }

  public ValidarCaracteresAlfabeticosYMaxLength(id: string, max: number, event: any){
    this.Validaciones.ValidarCaracteresAlfabeticosYMaxlength(id, event, max);
  }

  public ValidarMaxLength(id: string, max: number, event: any) {
    this.Validaciones.ValidarMaxlength(id, event, max);
  }

  private Limpiar(){
    $("#nit").val("");
    $("#nombre").val("");
    $("#direccion").val("");
  }

  private AlertaSwalSuccess(cabecera: string, cuerpo: string){
    Swal.fire(
      cabecera,
      cuerpo,
      'success'
    )
  }

  private AlertaSwalError(cabecera: string, cuerpo: string){
    Swal.fire(
      cabecera,
      cuerpo,
      'error'
    )
  }

}
