import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotate]',
  standalone: true
})
export class RotateDirective {

  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.eleRef.nativeElement.style.transform = 'rotate(20deg)';
  }
  @HostListener('click') onClick(){
    this.eleRef.nativeElement.style.transform = 'rotate(0deg)';
  }
}
