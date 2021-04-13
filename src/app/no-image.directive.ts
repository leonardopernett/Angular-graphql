import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private element:ElementRef) { }
  
  @HostListener('error')
  notImage(){
   this.element.nativeElement.src='./assets/imgs/404.jpeg'
  }
}
