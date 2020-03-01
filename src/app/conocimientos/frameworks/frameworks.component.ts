import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../../conocimientos/frameworks/frameworks.service'

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})

export class FrameworksComponent implements OnInit {

  framework:any[] = [];

  constructor(private _servicio:FrameworksService) 
  {
    this.framework = _servicio.obtenerFramework();
  }

  ngOnInit(): void {}

}