import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetCursosService } from './../get-cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-cursos',
  templateUrl: './get-cursos.component.html',
  styleUrls: ['./get-cursos.component.css']
})
export class GetCursosComponent implements OnInit {

  constructor(private cursoController:GetCursosService, private fb: FormBuilder) { }

  cursoForm:FormGroup = this.fb.group({
    nome:['',Validators.required]
  });

  cursoAlterarForm:FormGroup = this.fb.group({
    nome:['']
  });
  
  cursos:any = []

  ngOnInit(): void {

    this.cursoController.getCursos().subscribe(obj => this.cursos = obj);

  }

  onSubmit(){
    if(this.cursoForm.valid){
      this.cursoController.incluirCurso(this.cursoForm.value).subscribe(obj => {

        this.cursoController.getCursos().subscribe(obj => this.cursos = obj);

      });
    }
  }

  deletar(id){
    this.cursoController.deletarCurso(id).subscribe(obj => {
      this.cursoController.getCursos().subscribe(obj => this.cursos = obj);
    });
    
  }

  alterarcurso(curso){
    console.log(curso);
    this.cursoAlterarForm= this.fb.group({
     nome: [curso.nome],
     id: [curso.id]
    });
  }

  AlterarValor(){
    let obj = this.cursoAlterarForm.value;
    this.cursoController.alterarValor(obj.id,obj.nome).subscribe(success => {
      this.cursoController.getCursos().subscribe(obj => this.cursos = obj);
    });
  }
  

 
}
