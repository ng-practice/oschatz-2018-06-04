import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouse hit', this.tooltip);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    console.log('mouse left', this.tooltip);
  }
}
