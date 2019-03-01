import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-validardatos',
  templateUrl: './validardatos.component.html',
  styleUrls: ['./validardatos.component.css']
})
export class ValidardatosComponent implements OnInit {

  referencia:string;
  servicio:string;
  montoApagar:number;

  constructor(private appService:AppService) { }

  ngOnInit() {  
    this.referencia = this.appService.global.referencia;
    this.montoApagar = this.appService.global.montoApagar;
    this.servicio = this.appService.global.servicio;
  }
}
