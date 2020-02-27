import { Component, OnInit } from '@angular/core';
import {  BackendService  } from '../../backend.service'

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})

export class BackendComponent implements OnInit {

  backend:any[] = [];

  constructor( private _servicio:BackendService) 
  {
    this.backend = _servicio.obtenerBack();
  }

  ngOnInit(): void {}

}