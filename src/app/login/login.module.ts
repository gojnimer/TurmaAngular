import { UsuarioService } from './usuario.service';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  exports:[
    LoginComponent
  ],

  
  providers:[LoginService,UsuarioService]
})
export class LoginModule { }
