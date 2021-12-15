import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import * as cocoSSD from '@tensorflow-models/coco-ssd';
import Swal from 'sweetalert2';
import { SuperAdmin } from 'src/app/entidades/clases/super-admin';
import { Visitante } from 'src/app/entidades/clases/visitante';
import { Validaciones } from 'src/app/validaciones/validaciones';
import { Persona } from 'src/app/entidades/base/persona';
import { Personavisitante } from 'src/app/entidades/base/personavisitante';

@Component({
  selector: 'app-registros-generales',
  templateUrl: './registros-generales.component.html',
  styleUrls: ['./registros-generales.component.css']
})
export class RegistrosGeneralesComponent implements OnInit {

  private Personaadmin : Persona = SuperAdmin.ObtenerInstancia();
  private Personavisitante: Personavisitante = Visitante.ObtenerInstancia();
  private Validaciones: Validaciones = Validaciones.ObtenerInstancia();
  private Video!: HTMLVideoElement;
  private Mediastream!: MediaStream;
  private Foco!: string;

  private video!: HTMLVideoElement;

  constructor() { 
    $(() => {
      this.PrevenirPaste();
    });
  }

  ngOnInit(): void { 
  }
 
  public TipoDeUsuarioSeleccionado() {
    let option = $("#optiontipodeusuario").val();
    if (option === "super administrador" || option === "administrador" || option === "") {
      this.WebCamToClose();
      $(".hidden").prop("hidden", true);
    } else {
      this.WebCamInit();
      $(".hidden").prop("hidden", false);
    }
  }

  private WebCamInit(){
    this.Video = <HTMLVideoElement> document.getElementById('video');
    navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
      }
    }).then(mediaStream => {
      this.Mediastream = mediaStream;
      this.Video.srcObject = this.Mediastream;
      this.Video.onloadedmetadata = () => {
        this.Video.play();
        $(".hidden-btn-foto").prop("hidden", false);
        $(".hidden-cam").prop("hidden", false);
      }
      this.PrediccionRealTime();
    }).catch(() => {
      Swal.fire({
        title: '¡IMPORTANTE!',
        text: "Permiso denegado a la cámara, si desea dar el permiso y tomarse la foto, gestionelo en la barra de direcciones del navegador.",
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entiendo',
        footer: '<a style="color: dodgerblue;"><strong>B-SITOR.</strong></a>'
      });
    });
  }

  private WebCamToClose() {
    var tracks = this.Mediastream.getTracks();
    tracks.forEach((track: MediaStreamTrack) => {
      track.stop();
    });
    $(".hidden-btn-foto").prop("hidden", true);
    $(".hidden-cam").prop("hidden", true);
  }

  private async PrediccionRealTime() {
    const modelo = await cocoSSD.load('lite_mobilenet_v2');
    this.DetectarMarco(this.Video, modelo);
  }

  private DetectarMarco = (video: HTMLVideoElement, modelo: any) => {
    modelo.detect(video).then((prediccion : any) => {
      //alert(prediccion.length);
      // this.Foco = prediccion[0]['class'];
      // console.log(prediccion[0]['class']);
      // console.log(prediccion[0]['score']);
      this.RenderizarPrediccion(prediccion);
      requestAnimationFrame(() => {
        this.DetectarMarco(video, modelo);
      });
    }); 
  }

  RenderizarPrediccion = (predicciones : any) => {
    const canvas : any = <HTMLCanvasElement> document.getElementById ("canvas");  
    const ctx : any = canvas.getContext("2d");
    canvas.width  = 300;
    canvas.height = 300;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.drawImage(this.Video,0, 0,300,300);
    predicciones.forEach((prediccion : any) => {
      const x = prediccion.bbox[0];
      const y = prediccion.bbox[1];
      const width = prediccion.bbox[2];
      const height = prediccion.bbox[3];
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediccion.class).width;
      const textHeight = parseInt(font, 10);
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });
    predicciones.forEach((prediccion : any) => {
      const x = prediccion.bbox[0];
      const y = prediccion.bbox[1];
      ctx.fillStyle = "#000000";
      ctx.fillText(prediccion.class, x, y);
    });
  };

  public ValidarParaTomarFoto() {
    if (this.Foco === "person") {
      alert("bien... eres una persona.");
    } else {
      alert("no eres una persona...");
    }
  }

  public ValidarParaRegistrar(){
    if (this.ValidarContenido()) {
      if (this.ValidarPropiedades()) {
        if (this.ValidarParseoDeContrasenias()) {
          // if (this.ValidarFechaMayorYMenor()) {
          //   //this.RegistrarInformacion();
          // } else {

          // }
        } else {
          let msj = "Verificar las contraseñas porque no coinciden.";
          this.MensajeDeWarning(msj);
        }
      } 
    } else {
      let msj = "Para registrarse debe diligenciar todos los datos.";
      this.MensajeDeError(msj);
    }
  }

  private RegistrarInformacion(){
    //Se llama al servicio de registro...
  }

  private ValidarContenido() : boolean{
    let perfil = $("#optiontipodeusuario").val();
    if (perfil === "super administrador" || perfil === "administrador") {
      return this.ValidarContenidoEnPersonas();
    } else if (perfil === "funcionario" || perfil === "contratista" || perfil === "visitante") {
      return this.ValidarContenidoEnPersonasVisitantes();
    } else {
      return false;
    }
  }

  private ValidarContenidoEnPersonas() : boolean {
    let tipodeidentificacion = $("#optiontipodeidentificacion").val();
    let identificacion = $("#identificacion").val();
    let nombres = $("#nombres").val();
    let apellidos = $("#apellidos").val();
    let perfil = $("#optiontipodeusuario").val();
    let correo = $("#correo").val();
    let password = $("#password").val();
    let password2 = $("#password2").val();
    if (tipodeidentificacion !== "" && identificacion !== "" && nombres !== "" && apellidos !== "" &&
        perfil !== "" && correo !== "" && password !== "" && password2 !== ""){
      return true;
    } else {
      return false;
    }
  }

  private ValidarContenidoEnPersonasVisitantes() : boolean {
    if (this.ValidarContenidoEnPersonas()) {
      let estado = "inactivo";
      let pathfoto = "xyz";
      let destino = $("#destino").val();
      let fechadeentrada = $("#fechadeentrada").val();
      let fechadesalida = $("#fechadesalida").val();
      if (estado !== "" && pathfoto !== "" && destino !== "" && fechadeentrada !== "" && fechadesalida !== "") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private ValidarPropiedades() : boolean {
    let perfil = $("#optiontipodeusuario").val();
    if (perfil === "super administrador" || perfil === "administrador") {
      return this.ValidarPropiedadesAdmins();
    } else if (perfil === "funcionario" || perfil === "contratista" || perfil === "visitante") {
      return this.ValidarPropiedadesVisitantes();
    } else {
      return false;
    }
  }

  private ValidarPropiedadesAdmins() : boolean{
    this.Personaadmin.Tipodeidentificacion = (String)($("#optiontipodeidentificacion").val());
    this.Personaadmin.Identificacion = (Number)($("#identificacion").val());
    this.Personaadmin.Nombres = (String)($("#nombres").val());
    this.Personaadmin.Apellidos = (String)($("#apellidos").val());
    this.Personaadmin.Perfil = (String)($("#optiontipodeusuario").val());
    this.Personaadmin.Correo = (String)($("#correo").val());
    this.Personaadmin.Password = (String)($("#password").val());
    this.Personaadmin.Password2 = (String)($("#password2").val());
    if (this.Personaadmin.Identificacion === -1) { 
      let msj = "El número de identificación debe tener como mínimo 4 (1000) dígitos numéricos.";
      this.MensajeDeWarning(msj); return false 
    } 
    if (this.Personaadmin.Nombres === "") { 
      let msj = "Los nombres deben tener como mínimo 2 caracteres alfabéticos.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personaadmin.Apellidos === "") { 
      let msj = "Los apellidos deben tener como mínimo 2 caracteres alfabéticos.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personaadmin.Correo === "") { 
      let msj = "El correo debe tener como mínimo 4 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personaadmin.Password === "") { 
      let msj = "La contraseña debe tener como mínimo 8 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personaadmin.Password2 === "") { 
      let msj = "La confirmación de contraseña debe tener como mínimo 8 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    return true;
  }

  private ValidarPropiedadesVisitantes() : boolean{
    this.Personavisitante.Tipodeidentificacion = (String)($("#optiontipodeidentificacion").val());
    this.Personavisitante.Identificacion = (Number)($("#identificacion").val());
    this.Personavisitante.Nombres = (String)($("#nombres").val());
    this.Personavisitante.Apellidos = (String)($("#apellidos").val());
    this.Personavisitante.Perfil = (String)($("#optiontipodeusuario").val());
    this.Personavisitante.Correo = (String)($("#correo").val());
    this.Personavisitante.Password = (String)($("#password").val());
    this.Personavisitante.Password2 = (String)($("#password2").val());
    this.Personavisitante.Estado = "inactivo";
    this.Personavisitante.Pathfoto = "";
    this.Personavisitante.Destino = (String)($("#destino").val());
    let fe = (String)($("#fechadeentrada").val()); 
    let fs = (String)($("#fechadesalida").val());
    this.Personavisitante.Fechadeentrada = new Date(fe);
    this.Personavisitante.Fechadesalida = new Date(fs);
    if (this.Personavisitante.Identificacion === -1) { 
      let msj = "El número de identificación debe tener como mínimo 4 (1000) dígitos numéricos.";
      this.MensajeDeWarning(msj); return false 
    } 
    if (this.Personavisitante.Nombres === "") { 
      let msj = "Los nombres deben tener como mínimo 2 caracteres alfabéticos.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personavisitante.Apellidos === "") { 
      let msj = "Los apellidos deben tener como mínimo 2 caracteres alfabéticos.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personavisitante.Correo === "") { 
      let msj = "El correo debe tener como mínimo 4 caracteres alfanuméricos.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personavisitante.Password === "") { 
      let msj = "La contraseña debe tener como mínimo 8 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personavisitante.Password2 === "") { 
      let msj = "La confirmación de contraseña debe tener como mínimo 8 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    if (this.Personavisitante.Destino === "") { 
      let msj = "El destino debe tener como mínimo 2 caracteres.";
      this.MensajeDeWarning(msj); return false 
    }
    return true;
  }

  private ValidarParseoDeContrasenias() : boolean {
    let perfil = $("#optiontipodeusuario").val();
    if (perfil === "super administrador" || perfil === "administrador") {
      return this.Validaciones.ValidarParseoDeContrasenias(this.Personaadmin.Password, this.Personaadmin.Password2);
    } else if (perfil === "funcionario" || perfil === "contratista" || perfil === "visitante") {
      return this.Validaciones.ValidarParseoDeContrasenias(this.Personavisitante.Password, this.Personavisitante.Password2);
    } else {
      return false;
    }
  }

  private ValidarFechaMayorYMenor() : boolean {
    let perfil = $("#optiontipodeusuario").val();
    if (perfil === "super administrador" || perfil === "administrador") {
      return true;
    } else if (perfil === "funcionario" || perfil === "contratista" || perfil === "visitante") {
      let ae = this.Personavisitante.Fechadeentrada.getUTCFullYear().toLocaleString();// .getUTCFullYear();
      let me = this.Personavisitante.Fechadeentrada.getUTCMonth().toLocaleString();
      let de = this.Personavisitante.Fechadeentrada.getUTCDay().toLocaleString();
      // let as = this.Personavisitante.Fechadesalida.getUTCFullYear();
      // let ms = this.Personavisitante.Fechadesalida.getUTCMonth();
      // let ds = this.Personavisitante.Fechadesalida.getUTCDay();
      // alert("Entrada : " + de + " " + me + " " + ae);
      // alert("Salida  : " + ds + " " + ms + " " + as);
      if (this.Personavisitante.Fechadesalida > this.Personavisitante.Fechadeentrada) {
        alert("La fecha de salida está después de la de entrada");
        return true;
      } else {
        alert("La fecha de salida es antes de la fecha de entrada");
        return false;
      }
    } else {
      return false;
    }
  }

  private PrevenirPaste(){
    this.Validaciones.PrevenirPasteRegistrosGenerales();
  }

  public ValidarCaracteresNumericosYMaxlength(id: string, event: KeyboardEvent){
    this.Validaciones.ValidarCaracteresNumericosYMaxlength(id, event, 10);
  }

  public ValidarCaracteresAlfabeticosYMaxlength(id: string, event: KeyboardEvent){
    let max = 0;
    if (id === "nombres")
      max = 25;
    if (id === "apellidos")
      max = 50;
    this.Validaciones.ValidarCaracteresAlfabeticosYMaxlength(id, event, max);
  }

  public ValidarCaracteresAlfanumericosYMaxlength(id: string, event: KeyboardEvent){
    let max = 0;
    if (id === "correo")
      max = 50;
    if (id === "destino")
      max = 30;
    this.Validaciones.ValidarCaracteresAlfanumericosYMaxlength(id, event, max);
  }

  public ValidarMaxlength(id: string, event: KeyboardEvent){
    this.Validaciones.ValidarMaxlength(id, event, 50);
  }

  private MensajeDeWarning(msj: string) {
    Swal.fire({
      title: '¡CORREGIR!',
      text: msj,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entiendo',
      footer: '<a style="color: dodgerblue;"><strong>B-SITOR.</strong></a>'
    });
  }

  private MensajeDeError(msj: string) {
    Swal.fire({
      title: '¡ERROR!',
      text: msj,
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entiendo',
      footer: '<a style="color: dodgerblue;"><strong>B-SITOR.</strong></a>'
    });
  }

}
