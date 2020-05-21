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
      (obj:any) => {
        console.log(obj.token);
        /* let objJSON = JSON.parse(JSON.stringify(obj))
        console.log(objJSON.token); */
        localStorage.setItem("token",obj.token);
        this.rota.navigate(["home"]);


        

      },
      error => {
        console.log(error);
      }
     
      
      );
  }


 
}
