import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  estudios:any[] = [

    {
      fecha:'2016 - 2019',
      foto:'assets/utn.png',
      contenido:'Estudios Universitarios incompletos de la carrera Ingenieria en Sistemas de Informacion, aspirando el titulo intermedio de Analista en Sistemas de tres años de duracion. Los conociminetos abordados son los fundamentales en algoritmos, estructuras de datos, analisis de sistemas y base de datos.'
    },
    {
      fecha:'Diciembre de 2019',
      foto:'assets/mm.jpg',
      contenido:'Certificado como Desarrollador Web con un alcance a nivel Frontend para la creacion de aplicaciones web dinámicas y modernas, aplicando las respectivas tecnologias bajo el framework Angular.'
    },
    {
      fecha:'1997 - 2003',
      foto:'assets/secundario.jpg',
      contenido:'Instituto Sec Brigadier MJI San Martin. Graduado del nivel Secundario con titulo en Filosofia y Humanidades'
    }
  ]

  constructor() {}

  obtenerEstudios(){
    return this.estudios;
  }
}
