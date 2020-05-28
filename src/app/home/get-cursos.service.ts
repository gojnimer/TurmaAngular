import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCursosService {

  constructor(private http:HttpClient) { }
  urlBase = "http://localhost:4300/cursos";

  getCursos(){
    return this.http.get(this.urlBase);
  }

  incluirCurso(bodyCurso:any){
    return this.http.post(this.urlBase,bodyCurso);

  }

  deletarCurso(id){
    return this.http.delete("http://localhost:4300/cursos/" + id);

  }

  alterarValor(id,valor){
    return this.http.put("http://localhost:4300/cursos/" + id,{nome:valor});
  }
}
