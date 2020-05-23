import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[limitarNumero]'
})
export class LimitarNumeroDirective {

  // regexStr = '^[A-z]+$';
  constructor(private el: ElementRef) { }
   
  @Input() limitadorNumero: boolean;
  @Input() latestInputValue: number;
  @Input() maximo: number;
  @Input() minimo: number;

  @HostListener('paste', ['$event']) onPaste(event) {
    return false;
  }

 
  @HostListener('drag', ['$event']) onDrag(event) {
    return false;
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    return false;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    let e = <KeyboardEvent>event;
    let number = this.latestInputValue ? this.latestInputValue + e.key : e.key;
    if (parseInt(number) < this.minimo || parseInt(number) > this.maximo) {
      e.preventDefault();
    }
  }

}