import { Component, OnInit } from '@angular/core';
import { CursosService  } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:any[] = [];

  constructor(private _servicio:CursosService) 
  {
    this.cursos = _servicio.obtenerCursos();  
  }

  ngOnInit() {}

  click(indice){

    let contenido = null;
    let titulo = null;

    for(let item of this.cursos){
      if(parseInt(item.indice) == parseInt(indice)){
        contenido = item;
        titulo = item.curso;
      }else{ console.log('todo mal')}
    }

    document.getElementById('titulo').innerHTML = titulo;

    document.getElementById('body').innerHTML = 
    'Cursado en el instituto '+'<em class="text-warning text-capitalize">'+contenido.instituto+'</em>'+' con '+
    '<em class="text-warning">'+contenido.duracion+'</em>'+ ' de duracion.' +'<br>'+
    'Iniciado en: '+'<small class="text-white">'+contenido.inicio+'</small>'+
    ', Finalizado: '+'<small class="text-white">'+contenido.final+'</small>'                                               
  }

}