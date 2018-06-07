import { Directive, Input, Host } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') price: number;
  constructor(private el: ElementRef) { }
  @HostListener('mouseover')
  changeBorder() {
    if (this.price > 20000) {
      this.el.nativeElement.style.border = "20px solid red";
    }
  }
  @HostListener("mouseleave")
  reset() {
    this.el.nativeElement.style.border = "2px solid black";
  }
}
