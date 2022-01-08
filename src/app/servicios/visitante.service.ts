import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Personavisitante } from '../entidades/base/personavisitante';
import { Servidorapirest } from '../entidades/clases/servidor';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private Filepath!: string;
  private Singletonservidor: Servidorapirest = Servidorapirest.ObtenerInstancia();

  constructor(private storage: AngularFireStorage,
              private http: HttpClient) { 
  }

  public async RegistrarInformacion(visitante: Personavisitante) : Promise<Observable<Object>> {
    await this.SubirFotoYRegistrar(visitante); 
    return this.http.post(`${this.Singletonservidor.Urlapirestfull}usuarios`, visitante); 
  }

  public ObtenerTodos() : Observable<Personavisitante[]>{
    return this.http.get<Personavisitante[]>(`${this.Singletonservidor.Urlapirestfull}usuarios`); 
  }

  public ObtenerUnoByNumeroDeDocumento(numerodedocumento: number) : Observable<Personavisitante>{
    return this.http.get<Personavisitante>(`${this.Singletonservidor.Urlapirestfull}usuarios/` + numerodedocumento); 
  }

  public ActualizarUno(visitante: Personavisitante) : Observable<Object>{
    return this.http.put(`${this.Singletonservidor.Urlapirestfull}usuarios/`, visitante); 
  }

  private async SubirFotoYRegistrar(visitante: Personavisitante){
    const id = Math.random().toString(36).substring(2);
    const id2 = Math.random().toString(36).substring(2);
    var file = this.ProcesarLaImagen(visitante);
    this.Filepath = `Imagenes/${visitante.Identificacion.toString()}/${visitante.Identificacion + id + id2}`
    const ref = this.storage.ref(this.Filepath);
    const task = this.storage.upload(this.Filepath, file);
    await task.snapshotChanges()
      .toPromise()
      .then(
        async () => {
          await ref.getDownloadURL()
            .toPromise()
            .then(
              urlimg => {
                visitante.Pathfoto = urlimg;
              }
            );
        }
      );
  }

  private ProcesarLaImagen(visitante: Personavisitante): File{
    var img_b64 = visitante.Pathfoto;
    var png = img_b64.split(',')[1];
    var binary = this.FixBinary(window.atob(png));
    var the_file = new Blob(
      [binary], 
      {
        type: 'image/jpeg'
      }
    );
    var imagen_firma = new File(
      [the_file], 
      'imagen_firma.png', 
      { 
        type: 'image/jpeg' 
      }
    );
    return imagen_firma;
  }

  private FixBinary (bin: any) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }

}
