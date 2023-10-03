import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = [];
  
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', 'black');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(bColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = bColor;
    this.el.nativeElement.style.color = color;
  }
}
