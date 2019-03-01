import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    setTimeout(() => 
    {
      this.appService.EjecutaAccion(0);      
    },5000);
  }
}
