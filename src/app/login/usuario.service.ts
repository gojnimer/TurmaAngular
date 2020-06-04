import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  
  user:BehaviorSubject<any> = new BehaviorSubject(false);

  checkLogin(user){
    return this.http.get("usuario?email=" + user.email + "&senha=" + user.senha);

  }

  UserLogado(): boolean {
    let localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      return true;
    }
    return false;

  }
}
