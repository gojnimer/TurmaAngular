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
   localStorage.clear();
  }


  public enviar(){
   
    this.obj.postLogin(this.user).subscribe(  
      (obj:any) => {
        console.log(obj.token);
        /* let objJSON = JSON.parse(JSON.stringify(obj))
        console.log(objJSON.token); */
        this.obj.user.next(obj);
        localStorage.setItem("token",obj.token);
        this.rota.navigate(["home"]);

        /* {nome:obj.user.name,email:obj.user.email} */
        

      },
      error => {
        console.log(error);
      }
     
      
      );
  }


 
}
