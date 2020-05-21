import { TesteHomeComponent } from './teste-home/teste-home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentComOutroNomeComponent } from './component-com-outro-nome/component-com-outro-nome.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [HomeComponent, ComponentComOutroNomeComponent,TesteHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent ,TesteHomeComponent]
})
export class HomeModule { }
