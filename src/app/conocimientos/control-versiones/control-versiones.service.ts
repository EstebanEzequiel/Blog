import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlVersionesService {

  versiones:any[] = [

    {
      foto:'assets/git.png',
      porcentaje:'40',
      tecnologia:'Git'
    },
    {
      foto:'assets/github.png',
      porcentaje:'50',
      tecnologia:'GitHub'
    }
  ]

  constructor(){}

  obtenerVersiones()
  {
    return this.versiones;
  }
}
