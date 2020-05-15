import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent implements OnInit {
  
  titulo:any = "Exemplo de Interpolação";
  testebool:boolean = true;


  constructor() {


   }

  ngOnInit(): void {


  }

  
  teste(){
    
    this.testebool = !this.testebool;


    if(this.titulo == "Exemplo"){

      this.titulo = "Exemplo de Interpolação";
      return;

    }
    this.titulo = "Exemplo";
  }

}
