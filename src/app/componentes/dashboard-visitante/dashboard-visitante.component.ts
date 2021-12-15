import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-visitante',
  templateUrl: './dashboard-visitante.component.html',
  styleUrls: ['./dashboard-visitante.component.css']
})
export class DashboardVisitanteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public IrADashboard(){
    $("#dashboard").addClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").removeClass("active");
  }

  public IrASalidas(){
    $("#dashboard").removeClass("active");
    $("#salidas").addClass("active");
    $("#entradas").removeClass("active");
  }

  public IrAEntradas(){
    $("#dashboard").removeClass("active");
    $("#salidas").removeClass("active");
    $("#entradas").addClass("active");
  }

}
