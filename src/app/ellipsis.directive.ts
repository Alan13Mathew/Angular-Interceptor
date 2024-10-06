import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
  standalone: true
})
export class EllipsisDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:resize') onResize() {
    this.el.nativeElement.style.whiteSpace = 'nowrap';
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.style.textOverflow = 'ellipsis';
  }
  

}
