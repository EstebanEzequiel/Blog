import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  frontend:any[] = [

    {
      foto:'assets/html.png',
      porcentaje:'80',
      tecnologia:'HTML5'
    },
    {
      foto:'assets/css.png',
      porcentaje:'55',
      tecnologia:'CSS3'
    },
    {
      foto:'assets/js.png',
      porcentaje:'45',
      tecnologia:'Javascript'
    },
    {
      foto:'assets/JQuery.png',
      porcentaje:'60',
      tecnologia:'Jquery'
    },
    {
      foto:'assets/ts.png',
      porcentaje:'40',
      tecnologia:'Typescript'
    }
  ]

  constructor(){}

  obtenerFrontend()
  {
    return this.frontend;
  }
}
