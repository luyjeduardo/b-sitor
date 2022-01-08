import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../entidades/clases/empresa';
import { Servidorapirest } from '../entidades/clases/servidor';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private Singletonservidor: Servidorapirest = Servidorapirest.ObtenerInstancia();

  constructor(private http: HttpClient) { 
  }

  public RegistrarInformacion(empresa: Empresa) : Observable<Object> {
    return this.http.post<Object>(`${this.Singletonservidor.Urlapirestfull}empresas`, empresa); 
  }

  public ObtenerTodas() : Observable<Object>{
    return this.http.get(`${this.Singletonservidor.Urlapirestfull}empresas`); 
  }

  //public ObtenerUnaByNitEmpresa(nit: number) : Observable<Empresa>{
  //  return this.http.get<Empresa>(`${this.Singletonservidor.Urlapirestfull}empresas/` + nit); 
  //}

  public ActualizarUna(empresa: Empresa) : Observable<Object>{
    return this.http.put(`${this.Singletonservidor.Urlapirestfull}empresas`, empresa);
  }
}