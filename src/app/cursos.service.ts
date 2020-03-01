import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos:any [] = [

    {
      indice:'0',
      curso:'java inicial',
      instituto:'academia cisco-oracle',
      localidad:'utn cordoba',
      duracion:'4 meses',
      inicio:'agosto 2015',
      final:'diciembre 2015',
    },
    {
      indice:'1',
      curso:'tecnico de pc',
      instituto:'AES computacion',
      localidad:'barrio centro',
      duracion:'4 meses',
      inicio:'marzo 2010',
      final:'julio 2010',
    },
    {
      indice:'2',
      curso:'asistente pyme',
      instituto:'AES computacion',
      localidad:'barrio centro',
      duracion:'5 meses',
      inicio:'julio 2008',
      final:'diciembre 2008',
    },
    {
      indice:'3',
      curso:'operador de pc',
      instituto:'CEA informatica',
      localidad:'villa allende',
      duracion:'6 meses',
      inicio:'marzo 2002',
      final:'agosto 2002',
    }
  ]

  constructor(){ }

  obtenerCursos()
  {
    return this.cursos;
  }
}
