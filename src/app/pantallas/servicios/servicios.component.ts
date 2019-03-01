import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/shared/models/servicio.model';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: Servicio[]

  constructor(private appService:AppService) { }

  ngOnInit() {   
    this.servicios = this.appService.global.servicios;   
  }

  siguientePantalla(servicioId:number){
    this.appService.SeleccionServicio(servicioId);
    this.appService.SiguientePantalla();
  }

}
