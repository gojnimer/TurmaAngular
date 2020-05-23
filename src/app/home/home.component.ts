import { LoginService } from './../login/login.service';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  usuario:any;
  constructor(private rotaAtual: ActivatedRoute, private injector:Injector) { }

  ngOnInit(): void {

    let login = this.injector.get(LoginService);

    login.user.subscribe(obj =>{
      this.usuario = obj;
      console.log(this.usuario);
    } );


   /*  console.log(this.login.user ? this.login.user : "nulo"); */

    /*  this.rotaAtual.queryParams.subscribe(params => {
       console.log(params.token);
     }); */

    /*    alert(this.rotaAtual.snapshot.params.idCasa); */
    /* this.rotaAtual.params.subscribe(valor => {
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
     */
  }




  MostrarValor(event){
    alert(event.nome);
  }

}
