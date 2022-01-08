import { Component, OnInit } from '@angular/core';
import { Personavisitante } from 'src/app/entidades/base/personavisitante';
import { VisitanteService } from 'src/app/servicios/visitante.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  // public AutorId!: number;
  // public Nombrescompletos!: string;
  // public Fechadenacimiento!: Date;
  // public Ciudaddeprocedencia!: string;
  // public Correoelectronico!: string;
  public Visitantes: Personavisitante[] = [];

  constructor(//public serviciomodal: NgbModal,
              //private toastservice: ToastrService,
              private serviciodevisitante: VisitanteService) {
    this.CargarVisitantes();
  }

  ngOnInit(): void {
  }

  private CargarVisitantes() {
    this.Visitantes = [];
    this.serviciodevisitante.ObtenerTodos().subscribe(respuesta => {
      respuesta.forEach(persona =>{
        this.Visitantes.push(persona);
      });
    });
  }

  public AbrirModalModificarAutor(personavisitante: Personavisitante, contenido: any) {
    this.CargarInformacion(personavisitante);
    //this.serviciomodal.open(contenido, { size: 'lg' })
  }

  private CargarInformacion(personavisitante: Personavisitante) {
    // this.AutorId = autor.AutorId_;
    // this.Nombrescompletos = autor.Nombrescompletos_;
    // this.Fechadenacimiento = autor.Fechadenacimiento_;
    // this.Ciudaddeprocedencia = autor.Ciudaddeprocedencia_;
    // this.Correoelectronico = autor.Correoelectronico_;
  }
}
