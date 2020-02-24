import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OSService {

  os:any[] = [

    {
      foto:'assets/Windows.png',
      porcentaje:'90',
      tecnologia:'Windows'
    },  
    {
      foto:'assets/ubuntu.png',
      porcentaje:'35',
      tecnologia:'Linux Ubuntu'
    }
  ]

  constructor(){}

  obtenerOs()
  {
    return this.os;
  }
}
