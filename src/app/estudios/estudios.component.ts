import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../estudios/estudios.service'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: any[] = [];

  constructor( private _servicio:EstudiosService) 
  {
    this.estudios = _servicio.obtenerEstudios();
  }

  ngOnInit() {}

}
