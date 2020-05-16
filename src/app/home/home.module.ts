import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentComOutroNomeComponent } from './component-com-outro-nome/component-com-outro-nome.component';



@NgModule({
  declarations: [HomeComponent, ComponentComOutroNomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
