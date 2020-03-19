import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pestagna',
  templateUrl: './pestagna.component.html',
  styleUrls: ['./pestagna.component.css']
})
export class PestagnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  pinchar(){

    let x = document.getElementById("numero");
    if( x.style.display === "none"){
      x.style.display = "inline-flex"
    }else{
      x.style.display = "none"
    }
  }
}
