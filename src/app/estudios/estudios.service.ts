import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  estudios:any[] = [

    {
      fecha:'2016 - 2019',
      foto:'assets/utn.png',
      contenido:'Estudios Universitarios incompletos en la carrera Ingenieria en Sistemas; pero con aspiracion al titulo de Analista en Sistemas de 3 años de duracion. Los conociminetos abordados son los fundamentales en programacion, analisis de sistemas, base de datos, etc.'
    },
    {
      fecha:'Diciembre de 2019',
      foto:'assets/mm.jpg',
      contenido:'Certificado como Desarrollador Web con alcances hacia la creacion de aplicaciones web dinámicas y modernas, en el marco del framework Angular.'
    },
    {
      fecha:'1997 - 2003',
      foto:'assets/secundario.jpg',
      contenido:'Graduado en el Instituto Secundario Brigadier MJI San Martin, con titulo en Filosofia y Humanidades'
    }
  ]

  constructor() {}

  obtenerEstudios(){
    return this.estudios;
  }
}
