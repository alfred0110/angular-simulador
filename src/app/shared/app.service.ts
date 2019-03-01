import { Injectable } from '@angular/core';
import { RutaWeb, Proyecto } from './utils/rutaWeb';
import { Router } from '@angular/router';
import { Global } from './models/global.model';
import { Paso } from './models/paso.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 

  global: Global = new Global();
  private subjectPasos = new Subject<Paso[]>();  

  constructor(private router: Router) { }
 

  setPasos() {
    this.subjectPasos.next(this.global.ctrlPasos);
  }
  getPasos(): Observable<Paso[]> {
    return  this.subjectPasos.asObservable();
  }

  EstablecerPantallaActiva() {
    
    for (let index = 0; index <  this.global.ctrlPasos.length; index++) {
      this.global.ctrlPasos[index].estatus = false;
    }
    this.global.ctrlPasos[this.global.pantallaActiva].estatus = true;
    this.setPasos();

  }

  MostrarInicio(proyectoId:number){
    
    this.global.pantallaActiva = 0; 
    this.EstablecerDatosDummy(proyectoId);
    this.Goto(RutaWeb.PantallaBienvenida)  
  }

  NavegarAProyecto(proyectoId:number){
    this.global = new Global();  
    this.MostrarInicio(proyectoId);
  }

  EstablecerReferenciasDummy(servicioId:number)
  {
    switch(servicioId){
      case 1: 
        this.global.servicio = "CFE";
        this.global.montoApagar = 1300;
        break;
      case 2: 
        this.global.servicio = "TELMEX";
        this.global.montoApagar = 650;
        break;
      case 3: 
        this.global.servicio = "TELCEL";
        this.global.montoApagar = 150;
      break;
      case 4: 
        this.global.servicio = "TENENCIA";
        this.global.montoApagar = 1050;
      break;
      case 5: 
        this.global.servicio = "AGUA POTABLE";
        this.global.montoApagar = 100;
      break;
      case 6: 
        this.global.servicio = "PREDIAL";
        this.global.montoApagar = 100;
      break;
      default:
        this.global.servicio = "Pago de Servicio";
        this.global.montoApagar = 150;
      break;
    }

  }

  DescripcionRuta(ruta:RutaWeb): string{

    switch (ruta) {
      case RutaWeb.PantallaServicios: return "Selección de Servicio"
      case RutaWeb.PantallaReferencia: return "Captura de referencia"
      case RutaWeb.PantallaValidarDatos: return "Validación de información"
      case RutaWeb.PantallaPago: return "Ingreso de efectivo"
      case RutaWeb.PantallaTicket: return "Impresión de Ticket"
      case RutaWeb.PantallaDespedida: return "Despedida"
     
      default: ""
    }

  }

  ConfigurarCtrlPasos(){

    this.global.ctrlPasos = [];
    for (let index = 0; index < this.global.flujo.length; index++) {
      const rutaWeb = this.global.flujo[index];

      let paso = new Paso();
      paso.id = index + 1;
      paso.descripcion = this.DescripcionRuta(rutaWeb);
      paso.estatus = false;
      
      if(paso.descripcion !=null)
        this.global.ctrlPasos.push(paso);
    }
  }

  EstablecerDatosDummy(proyectoId:number){
    this.global.proyectoId = proyectoId;  
    switch(proyectoId){
      case Proyecto.Cuernavaca:
        this.global.flujo = [
          RutaWeb.PantallaServicios,
          RutaWeb.PantallaReferencia,
          RutaWeb.PantallaValidarDatos,
          RutaWeb.PantallaPago,
          RutaWeb.PantallaTicket,
          RutaWeb.PantallaDespedida
        ]
        this.global.titulo = "CUERNAVACA"
        this.global.servicios = [
          {servicioId:1, descripcion: "CFE"},
          {servicioId:2, descripcion: "TELMEX"},      
          {servicioId:5, descripcion: "AGUA POTABLE"}  
        ]
      break;
      case Proyecto.LaPaz:
        this.global.titulo = "LA PAZ"
        this.global.flujo = [
          RutaWeb.PantallaServicios,
          RutaWeb.PantallaReferencia,
          RutaWeb.PantallaValidarDatos,
          RutaWeb.PantallaPago,
          RutaWeb.PantallaTicket,
          RutaWeb.PantallaDespedida      
        ];
        this.global.servicios = [
          {servicioId:4, descripcion: "TENENCIA"},
          {servicioId:5, descripcion: "AGUA POTABLE"},
          {servicioId:6, descripcion: "PREDIAL"}
        ];
      break;
      case 3:
        this.global.titulo = "PUEBLA"
        this.global.flujo = [
          RutaWeb.PantallaServicios,
          RutaWeb.PantallaReferencia,
          RutaWeb.PantallaValidarDatos,
          RutaWeb.PantallaPago,
          RutaWeb.PantallaTicket,
          RutaWeb.PantallaDespedida     
        ];
        this.global.servicios = [
          {servicioId:1, descripcion: "CFE"},
          {servicioId:2, descripcion: "TELMEX"},
          {servicioId:6, descripcion: "PREDIAL"}
         
        ];
      break;
      case 4:
        this.global.titulo = "ESTADO DE MEXICO"
        this.global.flujo = [
          RutaWeb.PantallaServicios,
          RutaWeb.PantallaReferencia,
          RutaWeb.PantallaValidarDatos,
          RutaWeb.PantallaPago,
          RutaWeb.PantallaTicket,
          RutaWeb.PantallaDespedida     
        ];
        this.global.servicios = [          
          {servicioId:2, descripcion: "TELMEX"},
          {servicioId:4, descripcion: "TENENCIA"},
          {servicioId:6, descripcion: "PREDIAL"}
         
        ];
      break;
      
      default:
      break;
    }

    this.ConfigurarCtrlPasos();
  }

  EjecutaAccion(accion:number){
    switch(accion){
      case 0:
        this.NavegarAProyecto(this.global.proyectoId);
      break;
      case 1:
        this.SiguientePantalla();
      break;
    }
  }

  SeleccionServicio(servicioId:number){
    this.global.servicioId = servicioId;
    this.EstablecerReferenciasDummy(servicioId);
  }

  SiguientePantalla(){  
    this.EstablecerPantallaActiva(); 
    this.global.pantallaActiva++;
    console.log( this.global.pantallaActiva);    
    this.Goto(this.global.flujo[this.global.pantallaActiva - 1]);
  }


  Goto(ruta: RutaWeb) {
    switch (ruta) {
      case RutaWeb.ListaProyectos: {
        this.router.navigate(['app']);
      }
      break;
      case RutaWeb.PantallaBienvenida:
        this.router.navigate(['inicio']);
      break;
      case RutaWeb.PantallaServicios:
        this.router.navigate(['pagos/servicios']);
        
      break;
      case RutaWeb.PantallaReferencia:
        this.router.navigate(['pagos/referencia']);
      break;
      case RutaWeb.PantallaValidarDatos:
        this.router.navigate(['pagos/validar']);
      break;
      case RutaWeb.PantallaPago:
        this.router.navigate(['pagos/pago']);
      break;
      case RutaWeb.PantallaTicket:      
        this.router.navigate(['pagos/ticket']);
      break;
      case RutaWeb.PantallaDespedida:      
      this.router.navigate(['pagos/despedida']);
      break;
      default: break;
    }   

  }

}
