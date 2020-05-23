import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.css']
})
export class NgifExampleComponent implements OnInit {
 
  condition:boolean = true;
  texto:string = "verdadeiro";
  constructor() { }

  ngOnInit(): void {
  }

}
