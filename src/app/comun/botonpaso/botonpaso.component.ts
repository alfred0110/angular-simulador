import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botonpaso',
  templateUrl: './botonpaso.component.html',
  styleUrls: ['./botonpaso.component.css']
})
export class BotonpasoComponent implements OnInit {

  @Input()
  pasoId:number;
  @Input()
  descripcion:string;
  @Input()
  celdaActiva:boolean;

  constructor() { }

  ngOnInit() {
  }

}
