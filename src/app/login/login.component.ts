import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:any = {
    email: "",
    password:"" 
  }


  constructor(private obj:LoginService, private rota:Router) { }

  ngOnInit(): void {
   
  }


  public enviar(){
   
    this.obj.postLogin(this.user).subscribe(  
      obj => {
        console.log(obj);
        this.rota.navigate(["home","casa","teste1","teste2"]);


        

      },
      error => {
        console.log(error);
      }
     
      
      );
  }


 
}
