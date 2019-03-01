import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pantallas/bienvenida/bienvenida.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PagosComponent } from './proyectos/flujos/pagos/pagos.component';
import { ServiciosComponent } from './pantallas/servicios/servicios.component';
import { ReferenciaComponent } from './pantallas/referencia/referencia.component';
import { ValidardatosComponent } from './pantallas/validardatos/validardatos.component';
import { BotoneraComponent } from './comun/botonera/botonera.component';
import { PagoComponent } from './pantallas/pago/pago.component';
import { TicketComponent } from './pantallas/ticket/ticket.component';
import { DespedidaComponent } from './pantallas/despedida/despedida.component';
import { BotonpasoComponent } from './comun/botonpaso/botonpaso.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TeclaComponent } from './comun/tecla/tecla.component';
import { TecladoComponent } from './comun/teclado/teclado.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ProyectosComponent,
    PagosComponent,
    ServiciosComponent,
    ReferenciaComponent,
    ValidardatosComponent,
    BotoneraComponent,
    PagoComponent,
    TicketComponent,
    DespedidaComponent,
    BotonpasoComponent,
    TeclaComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
