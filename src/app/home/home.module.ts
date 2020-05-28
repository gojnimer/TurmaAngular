import { GetCursosComponent } from './get-cursos/get-cursos.component';
import { CnpjExemploPipe } from './pipe-exemplo/pipes/cnpj-exemplo.pipe';
import { DataExemploPipe } from './pipe-exemplo/pipes/data-exemplo.pipe';

import { PipeExemploComponent } from './pipe-exemplo/pipe-exemplo.component';
import { DecimalMaskDirective } from './diretiva-custom-example/decimal-mask.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


import { FundoAmareloDirective } from '../home/diretiva-custom-example/fundo-amarelo.directive';
import { NgclassExampleComponent } from './ngclass-example/ngclass-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgifExampleComponent } from './../home/ngif-example/ngif-example.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgstyleExampleComponent } from './ngstyle-example/ngstyle-example.component';
import { DiretivaCustomExampleComponent } from '../home/diretiva-custom-example/diretiva-custom-example.component';
import { LimitarNumeroDirective } from './diretiva-custom-example/limitar-numero.directive';
import { GetCursosService } from './get-cursos.service';





@NgModule({
  declarations: [
    HomeComponent,
    NgifExampleComponent,
    NgforExampleComponent,
    NgstyleExampleComponent,
    NgclassExampleComponent,
    DiretivaCustomExampleComponent,
    FundoAmareloDirective,
    LimitarNumeroDirective,
    DecimalMaskDirective,
    PipeExemploComponent,
    DataExemploPipe,
    CnpjExemploPipe,

    GetCursosComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [HomeComponent],

  providers:[GetCursosService]
})
export class HomeModule { }
