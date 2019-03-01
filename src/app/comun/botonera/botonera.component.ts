import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {


  @Input()
  ocultarBtnAceptar:boolean = false;

  constructor(private appService:AppService) { }

  ngOnInit() {
  }
  
  ejecuta(accion:number){
    this.appService.EjecutaAccion(accion);
  }

}
