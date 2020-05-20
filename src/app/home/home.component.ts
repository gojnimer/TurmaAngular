import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rotaAtual:ActivatedRoute) { }

  ngOnInit(): void {
 /*    alert(this.rotaAtual.snapshot.params.idCasa); */
    this.rotaAtual.params.subscribe(valor => {
      if(valor.idCasa){
        alert(valor.idCasa);
      }
      if(valor.idCasa2){
        alert(valor.idCasa2);
      }
       if(this.rotaAtual.snapshot.queryParams['rota']){
        alert(this.rotaAtual.snapshot.queryParams['rota']);
       }
      

    }  )
  }

}
