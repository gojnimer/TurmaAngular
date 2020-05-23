import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-diretiva-custom-example',
  templateUrl: './diretiva-custom-example.component.html',
  styleUrls: ['./diretiva-custom-example.component.css']
})
export class DiretivaCustomExampleComponent implements OnInit {


  @Input() nome: string;

  @Output() valor:any = new EventEmitter();
  qtdeProgramadaString = 0;
  constructor() { }
  numeroDeHoras = 0;
  valorFinal:string;
  ngOnInit(): void {
  }

  btnClick(){
    this.valor.emit({"nome": "Output Funcionando"})
  }

  mudaValorQtdProgramada(event){
   this.valorFinal = event;
  }

}
