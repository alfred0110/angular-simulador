import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
  
})
export class ReferenciaComponent implements OnInit {
  servicioId: number;

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.servicioId = this.appService.global.servicioId;
  }

  establecerReferencia(ref:string){
    console.log(ref);    
    this.appService.global.referencia = ref;
  }
}
