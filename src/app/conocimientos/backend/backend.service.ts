import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  back:any[] = [

    {
      foto:'assets/nodejs.png',
      porcentaje:'25',
      tecnologia:'Node'
    },
    {
      foto:'assets/php.png',
      porcentaje:'30',
      tecnologia:'PHP'
    },
    {
      foto:'assets/python.png',
      porcentaje:'50',
      tecnologia:'Python'
    }
  ]
  
  constructor(){}

  obtenerBack()
  {
    return this.back;
  }
}
