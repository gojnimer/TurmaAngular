import { LoginService } from './../../login/login.service';
import { Directive, ElementRef, HostListener, Renderer2, Injector } from '@angular/core';

@Directive({
  selector: '[inputDiretiva]'
})



export class FundoAmareloDirective {

  color:string = "yellow"

 /*  @HostListener('mouseenter') onMouseEnter() {
    this.mudarCor("blue");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mudarCor("yellow");
  } */
/* 
  @HostListener('click') onClick() {
    this.mudarCor(this.color == "blue" ? "yellow" : "blue " );
  }


  constructor(private ef: ElementRef) { 
    this.ef.nativeElement.style.color = this.color;

  }


  mudarCor(cor){
    this.ef.nativeElement.style.color = cor;
  } */


  //LIBRARY NOVA
  
  obj:any = {};

  constructor(private element:ElementRef,private handler:Renderer2, private logins:LoginService){
   
   this.logins.user.subscribe(value => this.obj = value);

   this.handler.setStyle(this.element.nativeElement,'color','blue');

   this.handler.listen(this.element.nativeElement,"click",(event:MouseEvent) => 
   {
    this.handler.setStyle(this.element.nativeElement,"color","green");
   });

  /*  this.handler.listen(this.element.nativeElement,"click",function teste(event:MouseEvent){

   }); */

   this.handler.setProperty(this.element.nativeElement,"value", this.GetUser());

  }


  GetUser(){
    if(this.obj.user){
      return this.obj.user.name;
    }
    return "não logado";
  }

}
