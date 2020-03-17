import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  estudios:any[] = [

    {
      fecha:'Año 2016 a la actualidad',
      foto:'assets/utn.png',
      contenido:'Cursando Analista en Sistemas de informacion.'
    },
    {
      fecha:'Año 2019',
      foto:'assets/mm.jpg',
      contenido:'Certificado con el titulo Desarrollo Web con alcances Frontend, para la creacion de webs dinámicas, bajo el framework Angular en su version mas reciente.'
    },
    {
      fecha:'Año 2003',
      foto:'assets/secundario.jpg',
      contenido:'Graduado en el Instituto Secundario Brigadier MJI San Martin. Titulo Filosofia y Humanidades'
    }
  ]

  constructor() {}

  obtenerEstudios()
  {
    return this.estudios;
  }
}