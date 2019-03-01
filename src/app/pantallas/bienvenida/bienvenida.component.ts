import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { RutaWeb } from 'src/app/shared/utils/rutaWeb';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  proyectoId : number
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.proyectoId = this.appService.global.proyectoId;
  }

  mostrarProyectos(){
    this.appService.Goto( RutaWeb.ListaProyectos);
  }
  
  siguientePantalla(){
    this.appService.SiguientePantalla();
  }



}
