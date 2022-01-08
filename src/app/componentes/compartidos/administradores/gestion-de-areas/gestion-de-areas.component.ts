import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/entidades/clases/area';
import { Empresa } from 'src/app/entidades/clases/empresa';
import { AreaService } from 'src/app/servicios/area.service';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import Swal from 'sweetalert2';
import { Validaciones } from 'src/app/validaciones/validaciones';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-de-areas',
  templateUrl: './gestion-de-areas.component.html',
  styleUrls: ['./gestion-de-areas.component.css']
})
export class GestionDeAreasComponent implements OnInit {

  public Nombre_mod! : string;
  public Optionempresa_mod! : number;
  private Idarea_mod! :  number;
  public Areas: Area[] = [];
  public Empresas: Empresa[] = [];
  private Area: Area = Area.ObtenerInstancia();
  private Validaciones: Validaciones = Validaciones.ObtenerInstancia();

  constructor(private serviciodearea: AreaService,
              private serviciodeempresa: EmpresaService,
              public modalngbootstrap: NgbModal) { 
    $(()=>{
      this.PrevenirPaste();
    });
  }

  async ngOnInit() {
    await this.CargarEmpresas();
    this.CargarAreas();
  }

  private CargarAreas() {
    this.Areas = [];
    this.serviciodearea.ObtenerTodas().subscribe((areas : any) => {
      areas.forEach((area: any) => {
        var areaa = new Area();
        areaa.Idarea_ = Number(area.Idarea);
        areaa.Idempresa_ = Number(area.Idempresa);
        areaa.Nombre_ = area.Nombre;
        this.Empresas.forEach(emp =>{
          if (emp.Idempresa_ == areaa.Idempresa_) {
            areaa.Empresa = emp;
          }
        });
        this.Areas.push(areaa);
      });
    });
  }

  private async CargarEmpresas() {
    this.Empresas = [];
    await this.serviciodeempresa.ObtenerTodas()
      .toPromise()
      .then((empresas : any)=> {
        empresas.forEach((empresa : any) =>{
          var empresa_temp = new Empresa();
          empresa_temp.Direccion_ = empresa.Direccion;
          empresa_temp.Idempresa_ = Number(empresa.Idempresa);
          empresa_temp.Idsuperadmin_ = Number(empresa.Idsuperadmin);
          empresa_temp.Nit_ = Number(empresa.Nit);
          empresa_temp.Nombre_ = empresa.Nombre;
          this.Empresas.push(empresa_temp);
        });
    });
  }

  public ValidarParaRegistrar(){
    this.Area.Nombre_ = String($("#nombre").val());
    this.Area.Idempresa_ = Number($("#optionempresa").val());
    if (this.Area.ValidarPropiedades() === "success") {
      this.RegistrarInformacion();
    } else {
      this.AlertaSwalError("Verificar", this.Area.ValidarPropiedades());
    }
  }

  private RegistrarInformacion() {
    this.serviciodearea.RegistrarInformacion(this.Area).subscribe((respuesta : any)=> {
      if (respuesta["Status"] === "Area Insertada") {
        this.AlertaSwalSuccess("Registrada", respuesta["Status"]);
        this.Limpiar();
      } else {
        this.AlertaSwalError("Error", respuesta["Status"]);
      }
      this.CargarAreas();
    });
  }

  public ValidarParaModificar(){
    this.Area.Idarea_ = this.Idarea_mod;
    this.Area.Nombre_ = this.Nombre_mod;
    this.Area.Idempresa_ = this.Optionempresa_mod;
    if (this.Area.ValidarPropiedades() === "success") {
      this.ModificarInformacion();
    } else {
      this.AlertaSwalError("Verificar", this.Area.ValidarPropiedades());
    }
  }

  private ModificarInformacion() {
    this.serviciodearea.ActualizarUna(this.Area).subscribe((respuesta : any)=> {
      console.log(respuesta);
      if (respuesta["Status"] === "Area Actualizada") {
        this.AlertaSwalSuccess("Modificada", respuesta["Status"]);
        this.Limpiar();
      } else {
        this.AlertaSwalError("Error", respuesta["Status"]);
      }
      this.CargarAreas();
    });
  }

  public AbrirModalModificarArea(area: Area, contenido: any) {
    this.CargarInformacion(area);
    this.modalngbootstrap.open(contenido, { size: 'md' });
  }

  private CargarInformacion(area: Area) {
    this.Idarea_mod = area.Idarea_;
    this.Nombre_mod = area.Nombre_;
    this.Optionempresa_mod = area.Idempresa_;
  }

  private Limpiar(){
    $("#nombre").val("");
    $("#optionempresa").val("");
  }

  public ValidarCaracteresAlfabeticosYMaxlength(id: string, event: any){
    this.Validaciones.ValidarCaracteresAlfabeticosYMaxlength(id, event, 50);
  }

  private PrevenirPaste() {
    $(  
      function PrevenirPaste(){
        var nombre : any = document.getElementById('nombre');
        nombre.onpaste = function(e : any) { e.preventDefault(); }
      }             
    );
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
