import { TesteHomeComponent } from './teste-home/teste-home.component';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [


  {path:"", component:HomeComponent,canActivate:[AuthGuard]},

  {path:"teste", component:TesteHomeComponent, canActivate:[AuthGuard]},

  {path:"teste4", component:TesteHomeComponent, canActivate:[AuthGuard]}

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
