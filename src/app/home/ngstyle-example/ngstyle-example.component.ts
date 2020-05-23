import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css']
})
export class NgstyleExampleComponent implements OnInit {

  constructor() { }

  ativo:boolean = false;
  tamanhoFonte: number = 10;

  ngOnInit(): void {
  }


  retornaFalse(f:boolean = false){
    return f;
  }

}
