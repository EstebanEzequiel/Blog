import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})

export class DatabaseComponent implements OnInit {

  database:any[] = [];

  constructor(private _servicio:DatabaseService) 
  {
    this.database = _servicio.obtenerData();
  }

  ngOnInit(): void {}

}