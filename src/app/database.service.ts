import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  data:any[] = [

    {
      foto:'assets/firebase.png',
      porcentaje:'60',
      tecnologia:'Firebase'
    },
    {
      foto:'assets/mysql.png',
      porcentaje:'35',
      tecnologia:'MySQL'
    }
  ]

  constructor(){}
  
  obtenerData()
  {
    return this.data;
  }
}