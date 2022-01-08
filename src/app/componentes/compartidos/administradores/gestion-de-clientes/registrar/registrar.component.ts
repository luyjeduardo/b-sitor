import { Component, OnInit } from '@angular/core';
import { Personavisitante } from 'src/app/entidades/base/personavisitante';
import { Contratista } from 'src/app/entidades/clases/contratista';
import { Visitante } from 'src/app/entidades/clases/visitante';
import { Funcionario } from 'src/app/entidades/clases/funcionario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  private Personavisitante: Personavisitante = Visitante.ObtenerInstancia();
  private Personafuncionario: Personavisitante = Funcionario.ObtenerInstancia();
  private Personacontratista: Personavisitante = Contratista.ObtenerInstancia();

  constructor() { }

  ngOnInit(): void {
  }

  public ValidarCaracteresNumericosYMaxlength(id: string, event: any){

  }

  public ValidarCaracteresAlfabeticosYMaxlength(id: string, event: any){

  }

  public ValidarCaracteresAlfanumericosYMaxlength(id: string, event: any){

  }

  public ValidarMaxlength(id: string, event: any){

  }

  public ValidarParaRegistrar(){
    console.log(this.Personavisitante);
  }

}
