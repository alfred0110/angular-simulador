import { Servicio } from './servicio.model';
import { RutaWeb } from '../utils/rutaWeb';
import { Paso, } from './paso.model';

export class Global{

    titulo:string;

    pantallaActiva:number;
    proyectoId:number;
    servicioId;
   
    servicios: Servicio[];
    flujo:RutaWeb[];

    referencia:string;    
    servicio:string;
    montoApagar:number;
    montoRecibido:number;

    ctrlPasos:Paso[];

}