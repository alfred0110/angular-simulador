import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { Paso } from 'src/app/shared/models/paso.model';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  servicioId: number;
  proyectoId : number;
  titulo: string;
  lstPasos : Paso[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.proyectoId = this.appService.global.proyectoId;
    this.titulo = this.appService.global.titulo;
    this.servicioId = this.appService.global.servicioId;
    this.lstPasos = this.appService.global.ctrlPasos;
    
    this.appService.getPasos().subscribe( pasos => 
        this.lstPasos = pasos
      );
    
  }

  mostrarInicio(){
    this.appService.MostrarInicio(this.proyectoId);
  }

}
