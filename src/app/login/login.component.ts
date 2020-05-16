import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

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


  constructor(private obj:LoginService) { }

  ngOnInit(): void {
   
  }


  public enviar(){
   
    this.obj.postLogin(this.user).subscribe(  
      obj => {
        console.log(obj);

      },
      error => {
        console.log(error);
      }
     
      
      );
  }


 
}
