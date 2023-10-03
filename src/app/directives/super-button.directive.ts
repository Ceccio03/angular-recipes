import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuperButton]',
  standalone: true
})
export class SuperButtonDirective {
  originalText: String = '';

  @HostListener('mouseover') onMouseOver() {
    this.originalText = this.el.nativeElement.innerHTML;
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.innerHTML = 'sei proprio sicuro?';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.innerHTML = this.originalText;
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.borderColor = 'yellow';
    el.nativeElement.style.borderStyle = 'dashed';
    el.nativeElement.style.backgroundColor = 'green';
    el.nativeElement.style.color = 'white';
  }
}