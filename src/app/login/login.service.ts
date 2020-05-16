import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public teste(){
    return 3;
  }


  public postLogin(user:any){
   /*  var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json'
   }); */

   return this.http.post("http://52.91.139.190/fsapi/users/login",user);
   


  }
}
