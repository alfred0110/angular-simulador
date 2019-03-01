import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { RutaWeb } from 'src/app/shared/utils/rutaWeb';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  montoApagar:number;
  montoRecibido:number = 0;
  montoPendiente:number;


  constructor(private appService:AppService) { }

  ngOnInit() {
    this.montoApagar = this.appService.global.montoApagar;
    this.montoPendiente = this.appService.global.montoApagar;
  }

  InsertaBillete(monto:number)
  {   
      this.montoRecibido += monto;
      this.appService.global.montoRecibido = this.montoRecibido;   
      this.montoPendiente = (this.montoRecibido >= this.montoApagar)  ? 0 : this.montoApagar - this.montoRecibido;
      
      if (this.montoRecibido >= this.montoApagar)
      {
        this.appService.SiguientePantalla();
      } 
  }

  cancelaOperacion(accion:number){
    this.appService.EjecutaAccion(accion);
  }


}
