import { UsuarioService } from './login/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private usuario:UsuarioService){}
  canShow:boolean = false;
  

  ngOnInit(){
    
    this.usuario.user.subscribe(value => this.canShow = value);
  }
  
}
