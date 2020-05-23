import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {

  constructor() { }

  cursos: string[] = ["Angular 2", "Java", "Phonegap","Python"];

  ngOnInit(): void {
  }

}
