import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [


  {path:"", redirectTo:"home", pathMatch:"full" },

  {path:"login", component: LoginComponent},
  
  {path:"home" , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path:"current", component:ViewChildExampleComponent}
  
  /* {path:"home" , canActivate:[AuthGuard]} */

/*   
  {path:"home/casa/:idCasa/:idCasa2", component:HomeComponent} */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
