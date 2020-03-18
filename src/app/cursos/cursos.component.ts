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

  click(indice)
  {

    let contenido = null;
    let titulo = null;
    let foto = null

    for(let item of this.cursos){
      if(parseInt(item.indice) == parseInt(indice)){
        contenido = item;
        titulo = item.curso;
        foto = item.foto;
        break
      }
    }

    document.getElementById('foto').innerHTML = '<img src="'+foto+'" class="card-img">';

    document.getElementById('titulo').innerHTML = titulo;

    document.getElementById('body').innerHTML = 
    'Instituto '+'<em class="text-warning text-capitalize">'+contenido.instituto+'<br></em>'
    +'Finalizado en '+'<small class="text-white text-capitalize">'+contenido.final+'</small>'+'<br>';     

    document.getElementById('footer').innerHTML = 
    '<a title="enlace" target="_blank" href="'+contenido.link+'" type="button" class="btn btn-dark m-1" id="btn-modal"><i class="fas fa-link"></i></a>'+
    '<button title="volver" type="button" class="btn btn-dark m-1" data-dismiss="modal" id="btn-modal"><i class="fas fa-undo-alt"></i></button>'
  }

}