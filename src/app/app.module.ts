import { FundoAmareloDirective } from './home/diretiva-custom-example/fundo-amarelo.directive';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';


@NgModule({
  declarations: [

    AppComponent,
    PrimeiroComponentComponent,
    ViewChildExampleComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    HttpClientModule
    
  ],
  exports: [],
  

  bootstrap: [AppComponent]

})
export class AppModule { }
