import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../shared/models/proyectos.model';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];
  proyectoId : number;
  
  constructor(private appService: AppService) { }

  ngOnInit() { 
    this.proyectos = [
      { id : 1, descripcion : "Proyecto Cuernavaca" },
      { id : 2, descripcion : "Proyecto La Paz" },
      { id : 3, descripcion : "Proyecto Puebla" },
      { id : 4, descripcion : "Proyecto Edo. Mex." }
    ]
  }
  Ejecutar(id:number){
    this.appService.NavegarAProyecto(id);
    this.proyectoId = id;
  }
}
