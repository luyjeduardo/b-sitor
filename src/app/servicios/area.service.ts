import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../entidades/clases/area';
import { Servidorapirest } from '../entidades/clases/servidor';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private Singletonservidor: Servidorapirest = Servidorapirest.ObtenerInstancia();

  constructor(private http: HttpClient) { 
  }

  public RegistrarInformacion(area: Area) : Observable<Object> {
    return this.http.post(`${this.Singletonservidor.Urlapirestfull}areas`, area); 
  }

  public ObtenerTodas() : Observable<Object>{
    return this.http.get(`${this.Singletonservidor.Urlapirestfull}areas`); 
  }

  //public ObtenerUnaByIdEmpresa(nit: number) : Observable<Area>{
  //  return this.http.get<Area>(`${this.Singletonservidor.Urlapirestfull}areas/` + nit); 
  //}

  public ActualizarUna(area: Area) : Observable<Object>{
    return this.http.put(`${this.Singletonservidor.Urlapirestfull}areas`, area); 
  }
}