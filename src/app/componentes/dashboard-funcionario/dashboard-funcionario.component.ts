import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-funcionario',
  templateUrl: './dashboard-funcionario.component.html',
  styleUrls: ['./dashboard-funcionario.component.css']
})
export class DashboardFuncionarioComponent implements OnInit {

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
