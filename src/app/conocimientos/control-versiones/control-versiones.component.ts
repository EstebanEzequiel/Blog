import { Component, OnInit } from '@angular/core';
import { ControlVersionesService } from '../../control-versiones.service'

@Component({
  selector: 'app-control-versiones',
  templateUrl: './control-versiones.component.html',
  styleUrls: ['./control-versiones.component.css']
})

export class ControlVersionesComponent implements OnInit {

  versiones:any[] = []
  constructor(private _servicio:ControlVersionesService) 
  { 
    this.versiones = _servicio.obtenerVersiones();
  }

  ngOnInit(): void {}
}
