import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exemplo',
  templateUrl: './pipe-exemplo.component.html',
  styleUrls: ['./pipe-exemplo.component.css']
})
export class PipeExemploComponent implements OnInit {

  constructor() { }
  cnpj = "12312312312312";
  dataNow = new Date();

  ngOnInit(): void {
  }

}
