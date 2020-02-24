import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  framework:any[] = [
    {
      foto:'assets/angular.png',
      porcentaje:'60',
      tecnologia:'Angular'
    },
    {
      foto:'assets/bootstrap.png',
      porcentaje:'85',
      tecnologia:'Bootstrap'
    },
    {
      foto:'assets/font-awesome.jpg',
      porcentaje:'80',
      tecnologia:'Font-Awesome'
    },
  ]

  constructor(){}

  obtenerFramework()
  {
    return this.framework;
  }
}