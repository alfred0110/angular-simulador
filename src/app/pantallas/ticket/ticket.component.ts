import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';



@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  
  today: number = Date.now();
  montoPendiente: number = 0;
  referencia:string;
  servicio:string;
  montoApagar:number;
  montoRecibido:number;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.montoPendiente = this.appService.global.montoRecibido - this.appService.global.montoApagar;
    this.montoRecibido=this.appService.global.montoRecibido;
    this.montoApagar=this.appService.global.montoApagar;
    this.servicio=this.appService.global.servicio;
      setTimeout(() => 
      {
        this.appService.SiguientePantalla();
      },5000);
    }
}
