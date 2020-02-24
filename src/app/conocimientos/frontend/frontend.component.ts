import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../../frontend.service'

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  frontend:any[] = [];

  constructor( private _servicio:FrontendService) 
  {
    this.frontend = _servicio.obtenerFrontend();
  }

  ngOnInit(): void {}

}
