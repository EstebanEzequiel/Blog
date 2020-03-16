import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PreEncabezadoComponent } from './pre-encabezado/pre-encabezado.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { CursosComponent } from './cursos/cursos.component';
import { FrontendComponent } from './conocimientos/frontend/frontend.component';
import { BackendComponent } from './conocimientos/backend/backend.component';
import { FrameworksComponent } from './conocimientos/frameworks/frameworks.component';
import { DatabaseComponent } from './conocimientos/database/database.component';
import { OSComponent } from './conocimientos/os/os.component';
import { ControlVersionesComponent } from './conocimientos/control-versiones/control-versiones.component';
import { AsideComponent } from './aside/aside.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PestagnaComponent } from './pestagna/pestagna.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ConocimientosComponent,
    PiePaginaComponent,
    PreEncabezadoComponent,
    EstudiosComponent,
    CursosComponent,
    FrontendComponent,
    BackendComponent,
    FrameworksComponent,
    DatabaseComponent,
    OSComponent,
    ControlVersionesComponent,
    AsideComponent,
    ProyectosComponent,
    PestagnaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}