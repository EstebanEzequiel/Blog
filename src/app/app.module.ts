import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PreEncabezadoComponent } from './pre-encabezado/pre-encabezado.component';
import { EstudiosComponent } from './estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    ConocimientosComponent,
    IdiomasComponent,
    ProyectosComponent,
    PiePaginaComponent,
    PreEncabezadoComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
