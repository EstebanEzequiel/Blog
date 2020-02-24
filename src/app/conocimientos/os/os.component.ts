import { Component, OnInit } from '@angular/core';
import { OSService } from '../../os.service'

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})

export class OSComponent implements OnInit {

  os:any[] = []
  constructor(private _servicio:OSService) 
  { 
    this.os=_servicio.obtenerOs();
  }

  ngOnInit(): void {}
}
