import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup = this.fb.group({
    email: ["",[Validators.email,Validators.required]],
    senha: ["",[Validators.required,Validators.minLength(5)]]
  });

  errorList: any = [];

  constructor(private LoginAuth:LoginService, private routing:Router, private fb:FormBuilder){}

  ngOnInit(){
    
  }

  onSubmit(){
    
    this.Validate(this.loginForm);
  }


  Validate(form: FormGroup) {
    this.errorList = [];
    Object.keys(form.controls).forEach(key => {

      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
         /*  console.log(key + " " + keyError + " " +  controlErrors[keyError]); */
          this.errorList.push(this.errorBuilder(key,keyError));
         /*  result.push({
            'control': key,
            'error': keyError,
            'value': controlErrors[keyError]
          }); */
        });
      }
    });
    return this.loginForm.valid;
  }

  errorBuilder(key,error){
    let erro;
    switch(error){
      case 'email':
        erro = "O email não é válido!";
        break;
      case 'required':
        erro = "Por favor preencha o campo de " + key;
        break;

    }

    return erro;
  }

  

 
}










/* 

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
      /let objJSON = JSON.parse(JSON.stringify(obj))
      console.log(objJSON.token); 
      this.obj.user.next(obj);
      localStorage.setItem("token",obj.token);
      this.rota.navigate(["home"]);

       {nome:obj.user.name,email:obj.user.email} 
      

    },
    error => {
      console.log(error);
    }
   
    
    );
} 

*/
