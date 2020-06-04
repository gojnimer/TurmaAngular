import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private http: HttpClient) { }
  
  user:BehaviorSubject<any> = new BehaviorSubject({});
  
  
  public teste() {
    return 3;
  }

  ngOnInit(){
    this.http.options
  }

  public postLogin(user: any) {
    /*  var reqHeader = new HttpHeaders({ 
       'Content-Type': 'application/json'
    }); */
    return this.http.post("http://52.91.139.190/fsapi/users/login", user);
  }

  public UserLogado(): boolean {
    let localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      return true;
    }
    return false;

  }
}
