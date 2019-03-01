import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from '../app/proyectos/proyectos.component'
import { BienvenidaComponent } from './pantallas/bienvenida/bienvenida.component';
import { PagosComponent } from './proyectos/flujos/pagos/pagos.component';
import { ServiciosComponent } from './pantallas/servicios/servicios.component';
import { ReferenciaComponent } from './pantallas/referencia/referencia.component';
import { ValidardatosComponent } from './pantallas/validardatos/validardatos.component';
import { PagoComponent } from './pantallas/pago/pago.component';
import { TicketComponent } from './pantallas/ticket/ticket.component';
import { DespedidaComponent } from './pantallas/despedida/despedida.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch : 'full'},
  { path : 'app', component : ProyectosComponent },
  { path : 'inicio', component: BienvenidaComponent},
  { path : 'pagos', component: PagosComponent, 
    children : [    
      {path: 'servicios', component: ServiciosComponent},
      {path: 'referencia', component: ReferenciaComponent},
      {path: 'validar', component: ValidardatosComponent},
      {path: 'pago', component: PagoComponent},
      {path: 'ticket', component: TicketComponent},
      {path: 'despedida', component: DespedidaComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
