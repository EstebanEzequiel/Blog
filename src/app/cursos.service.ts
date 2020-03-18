import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos:any [] = [

    {
      indice:'0',
      foto:'assets/oracle_java.jpg',
      curso:'java inicial',
      instituto:'cisco-oracle UTN-FRC',
      final:'diciembre 2015',
      link:'http://www.cisco.frc.utn.edu.ar/?pIs=2650'

    },
    {
      indice:'1',
      foto:'assets/tecnico-pc.png',
      curso:'tecnico de PC',
      instituto:'AES',
      final:'diciembre 2009',
      link:'http://www.aescapacitacion.com.ar/PublicAES/ServicioTecnico.aspx'
    },
    {
      indice:'2',
      foto:'assets/tango.png',
      curso:'tango gestion',
      instituto:'AES',
      final:'diciembre 2008',
      link:'http://www.aescapacitacion.com.ar/PublicAES/Administracion.aspx'
    },
    {
      indice:'3',
      foto:'assets/operador-pc.jpg',
      curso:'operador de PC',
      instituto:'CEA-informatica',
      final:'agosto 2002',
      link:'http://www.institutocea.com.ar/index.html'
    }
  ]

  constructor(){ }

  obtenerCursos()
  {
    return this.cursos;
  }
}
