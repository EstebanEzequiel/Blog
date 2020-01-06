import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PiePagComponent } from './pie-pag/pie-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    ConocimientosComponent,
    IdiomasComponent,
    ProyectosComponent,
    PiePagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
