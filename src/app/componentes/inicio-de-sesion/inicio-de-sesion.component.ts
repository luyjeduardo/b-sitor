import { Component, OnInit } from '@angular/core';
import { Validaciones } from 'src/app/validaciones/validaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {

  public Correo! : string;
  public Password! : string;

  Validaciones: Validaciones = Validaciones.ObtenerInstancia();

  constructor() {
    $(() => {
      this.PrevenirPaste();
    });
  }

  ngOnInit(): void { }

  public ValidarParaIniciarSesion(){
    if (this.ValidarContenido()){
      this.IniciarSesion();
    } else {
      Swal.fire({
        title: '¡ERROR!',
        text: 'Deben llenar toda la información para el inicio de sesión. Verifique correo electrónico y/o contraseña.',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entiendo',
        footer: '<a style="color: dodgerblue;"><strong>B-SITOR.</strong></a>'
      })
    }
  }

  private ValidarContenido() : boolean {
    if (this.Password !== "" && this.Password !== null && this.Password !== undefined &&
        this.Correo !== "" && this.Correo !== null && this.Correo !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  private IniciarSesion(){
    //Llamamos el servicio para conectar la API.
    this.Correo = "";
    this.Password = "";
  }

  private PrevenirPaste(){
    this.Validaciones.PrevenirPasteInicioDeSesion();
  }

}
