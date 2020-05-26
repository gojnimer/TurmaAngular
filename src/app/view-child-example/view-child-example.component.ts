import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.css']
})
export class ViewChildExampleComponent implements OnInit {

  constructor() { }

  @ViewChild('titulo', { static: false }) elementoTitulo : ElementRef;
  @ViewChild('inputTeste', { static: false }) inputTeste : ElementRef;

  ngOnInit(): void {
  }

  mostrarElemento(){
    console.log(this.elementoTitulo);
    this.elementoTitulo.nativeElement.innerHTML = "testando";
    document.getElementById("tituloteste").innerHTML = "testando";
    this.inputTeste.nativeElement.value = "";
  }

}
