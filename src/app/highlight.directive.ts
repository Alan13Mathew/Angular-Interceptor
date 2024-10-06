import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {   }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
  @HostListener('click') onClick(){
    this.el.nativeElement.style.backgroundColor = 'green'
  }
}
